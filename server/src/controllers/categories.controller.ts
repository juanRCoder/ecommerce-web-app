import { NextFunction, Request, Response } from "express";
import prisma from "../prismaClient";

export const getCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const categories = await prisma.category.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    res.status(200).json(categories)
  } catch (error) {
    console.error("[Controller: getCategories]", error);
    next(error);
  }
};
