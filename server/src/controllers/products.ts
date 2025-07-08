import { NextFunction, Request, Response } from "express";

export const getProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log("get allProducts")
  } catch(error) {
      console.error('[Controller: getProducts]', error)
    next(error)
  }
}