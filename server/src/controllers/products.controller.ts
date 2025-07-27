import { NextFunction, Request, Response } from "express";
import prisma from "../prismaClient";

export const getProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { page, limit, categories, search, minPrice, maxPrice } = req.query;
  if (!page || !limit) {
    res.status(400).json({ message: "Page and Limit is required" });
    return;
  }
  const pageNumber = Number(page);
  const limitNumber = Number(limit);
  const minPriceNumber = Number(minPrice);
  const maxPriceNumber = Number(maxPrice);

  if (isNaN(pageNumber) || isNaN(limitNumber)) {
    res.status(400).json({ message: "Page and Limit must be numbers" });
    return;
  }
  const offset = (pageNumber - 1) * limitNumber;
  const categoryList =
    typeof categories === "string" && categories.length > 0
      ? categories.split(",").map((c) => c.trim())
      : [];

  try {
    const conditions = [];
    if (search) {
      conditions.push({
        name: {
          contains: search as string,
          mode: "insensitive" as const,
        },
      });
    }

    if (categoryList.length > 0) {
      conditions.push({
        productCategories: {
          some: {
            category: {
              name: {
                in: categoryList,
              },
            },
          },
        },
      });
    }

    if (!isNaN(minPriceNumber)) {
      conditions.push({
        price: {
          gte: minPriceNumber,
        },
      });
    }

    if (!isNaN(maxPriceNumber)) {
      conditions.push({
        price: {
          lte: maxPriceNumber,
        },
      });
    }

    const whereOptions = conditions.length > 0 ? { AND: conditions } : {};

    const [products, total] = await Promise.all([
      prisma.product.findMany({
        where: whereOptions,
        skip: offset,
        take: limitNumber,
        select: {
          id: true,
          name: true,
          price: true,
          status: true,
          imageUrl: true,
          productCategories: {
            select: {
              category: {
                select: {
                  name: true,
                },
              },
            },
          },
        },
      }),
      prisma.product.count({ where: whereOptions }),
    ]);

    const cleanedProducts = products.map(({ productCategories, ...rest }) => ({
      ...rest,
      categories:
        productCategories.length > 0
          ? productCategories.map((pc) => pc.category.name)
          : null,
    }));

    res.status(200).json({
      total,
      page: pageNumber,
      limit: limitNumber,
      totalPages: Math.ceil(total / limitNumber),
      products: cleanedProducts,
    });
    return;
  } catch (error) {
    console.error("[Controller: getProducts]", error);
    next(error);
  }
};
