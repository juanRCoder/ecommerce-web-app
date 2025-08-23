import { NextFunction, Request, Response } from "express";
import prisma from "../prismaClient";

export const getOrders = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const orders = await prisma.order.findMany({
      select: {
        id: true,
        name: true,
        phone: true,
        typeOfDelivery: true,
        address: true,
        typeOfPayment: true,
        notes: true,
      },
    });

    res.status(200).json({ data: orders });
  } catch (error) {
    console.error("[Controller: getOrders]", error);
    next(error);
  }
};

export const createOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { products, ...order } = req.body;
  try {
    const newOrder = await prisma.order.create({
      data: {
        ...order,
        orderProducts: {
          create: products.map(
            (pr: { productId: string; quantity: number }) => ({
              product: {
                connect: { id: pr.productId },
              },
              quantity: pr.quantity,
            })
          ),
        },
      },
    });

    res.status(201).json({ data: { nOrden: newOrder.id } });
  } catch (error) {
    console.error("[Controller: createOrder]", error);
    next(error);
  }
};

export const getOrderById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    const order = await prisma.order.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        phone: true,
        typeOfDelivery: true,
        address: true,
        typeOfPayment: true,
        imageVoucher: true,
        notes: true,
        orderProducts: {
          select: {
            quantity: true,
            product: {
              select: {
                name: true,
                imageUrl: true,
              },
            },
          },
        },
      },
    });

    if (!order) {
      res.status(404).json({ message: "Order not found" });
      return;
    }

    const { orderProducts, ...rest } = order;

    const formattedOrder = {
      ...rest,
      products: orderProducts.map((op) => ({
        quantity: op.quantity,
        name: op.product.name,
        imageUrl: op.product.imageUrl,
      })),
    };

    res.json({ data: formattedOrder });
  } catch (error) {
    console.error("[Controller: getOrderById]", error);
    next(error);
  }
};
