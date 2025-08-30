import { z } from "zod";

export const checkoutSchema = z
  .object({
    name: z.string().min(1, { message: "Nombre Obligatorio!" }),
    phone: z.string().min(9, { message: "Telefono Obligatorio!" }),
    typeOfDelivery: z.string().min(1, { message: "Tipo de Entrega Obligatorio!" }),
    address: z.string().min(1, { message: "Direccion Obligatoria!" }).optional(),
    typeOfPayment: z.string().min(1, { message: "Tipo de Pago Obligatorio!" }),
    imageVoucher: z.instanceof(File).optional(),
    notes: z.string().min(1, { message: "Notas Obligatorias!" }).optional(),
  })
  .superRefine((data, ctx) => {
    if (data.typeOfDelivery === "delivery" && !data.address) {
      ctx.addIssue({
        code: "custom",
        path: ["address"],
        message: "Dirección es obligatoria para delivery",
      });
    }
    if (data.typeOfPayment === "credit" && !data.imageVoucher) {
      ctx.addIssue({
        code: "custom",
        path: ["imageVoucher"],
        message: "Debes subir comprobante de pago",
      });
    }
  });

export type checkoutInferSchema = z.infer<typeof checkoutSchema>;
