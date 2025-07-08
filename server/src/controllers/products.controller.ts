import { NextFunction, Request, Response } from "express";
import prisma from "../prismaClient";

export const getProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const products = await prisma.product.findMany({
      include: {
        categories: {
          select: {
            name: true,
          },
        },
      },
    });
    const whioutCategories = products.map((p) => ({
      ...p,
      categories: p.categories.length > 0 ? p.categories : null,
    }));
    res.status(200).json(whioutCategories);
  } catch (error) {
    console.error("[Controller: getProducts]", error);
    next(error);
  }
};
