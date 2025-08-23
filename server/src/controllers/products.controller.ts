import { NextFunction, Request, Response } from "express";
import prisma from "../prismaClient";

export const getProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { page, limit, category, search } = req.query;
  if (!page || !limit) {
    res.status(400).json({ message: "Page and Limit is required" });
    return;
  }
  const pageNumber = Number(page);
  const limitNumber = Number(limit);

  if (isNaN(pageNumber) || isNaN(limitNumber)) {
    res.status(400).json({ message: "Page and Limit must be numbers" });
    return;
  }
  const offset = (pageNumber - 1) * limitNumber;
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

    if (category) {
      conditions.push({
        category: {
          name: {
            equals: category as string,
          },
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
          categoryId: true,
        },
      }),
      prisma.product.count({ where: whereOptions }),
    ]);

    res.status(200).json({
      total,
      page: pageNumber,
      limit: limitNumber,
      totalPages: Math.ceil(total / limitNumber),
      products: products,
    });
    return;
  } catch (error) {
    console.error("[Controller: getProducts]", error);
    next(error);
  }
};
