import { ShoppingCart } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { MainHeader, MainNavbar } from "@/components";
import { BaseButton, BaseInput } from "@/shared";
import { useCartStore } from "@/stores/cart.store";
import { removeEmptyProperties } from "@/utils/RemoveEmptyProperties";
import { zodResolver } from "@hookform/resolvers/zod";
import { checkoutInferSchema, checkoutSchema } from "@/schemas/checkout.schema";
import { useCreateOrder } from "@/hooks/useCreateOrder";
import { useVoucherStore } from "@/stores/voucher.store";


export default function CheckoutView() {
  const navigate = useNavigate()
  const { products } = useCartStore()
  const { setData } = useVoucherStore();
  const { mutate } = useCreateOrder();
  const totalPrice = products.reduce((acc, item) => acc + item.price * item.quantity, 0)

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<checkoutInferSchema>({
    resolver: zodResolver(checkoutSchema),
    shouldUnregister: true,
    defaultValues: {
      typeOfDelivery: "",
      typeOfPayment: "",
    }
  });

  const methodDelivery = watch("typeOfDelivery")
  const methodPayment = watch("typeOfPayment")
  const selectedFile = watch("imageVoucher");

  const onSubmit = (data: checkoutInferSchema) => {
    const cleanData = removeEmptyProperties(data)
    const formData = new FormData();

    formData.append("name", cleanData.name || "");
    formData.append("phone", String(cleanData.phone));
    formData.append("typeOfDelivery", cleanData.typeOfDelivery || "");
    if (cleanData.address) formData.append("address", cleanData.address);
    formData.append("typeOfPayment", cleanData.typeOfPayment || "");
    if (cleanData.notes) formData.append("notes", cleanData.notes);
    if (cleanData.imageVoucher) formData.append("imageVoucher", cleanData.imageVoucher);

    if (Array.isArray(products)) {
      const mappedProducts = products.map((p) => ({
        productId: p.id,
        quantity: p.quantity
      }));
      formData.append("products", JSON.stringify(mappedProducts));
    }

    // for (const [key, value] of formData.entries()) {
    //   console.log(key, value);
    // }

    mutate(formData, {
      onSuccess: (data) => {
        console.log("Order created successfully:", data);
        setData(data);
        navigate('/voucher');
      },
      onError: (error) => {
        console.error("Error creating order:", error);
      },
    });
  }

  return (
    <section
      className="select-none relative flex flex-col justify-between max-w-sm m-auto min-h-screen bg-white"
      style={{ fontFamily: "Oswald" }}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex-1 px-2 pb-3">
        <MainHeader title="CHECKOUT" icon={ShoppingCart} />

        <div className="flex flex-col gap-4 mb-4">
          <div>
            <h3 className="text-[#292929] font-semibold text-lg">DATOS DEL CLIENTE</h3>
            <div className="flex flex-col gap-3 pt-2">
              <BaseInput
                id="name"
                label="Nombre y Apellido"
                type="text"
                register={register}
                errors={errors}
              />
              <BaseInput
                id="phone"
                label="Telefono Movil"
                type="number"
                register={register}
                errors={errors}
              />
            </div>
          </div>

          <div>
            <h3 className="text-[#292929] font-semibold text-lg">TIPO DE ENTREGA</h3>
            <div className="flex flex-col gap-3 pt-2">
              <input type="hidden" {...register("typeOfDelivery")} />
              <BaseButton
                content="EN LOCAL"
                color={methodDelivery === "local" ? "secondary" : "primary"}
                onClick={() => setValue("typeOfDelivery", "local", { shouldValidate: true })}
              />
              <BaseButton
                content="A DOMICILIO"
                color={methodDelivery === "delivery" ? "secondary" : "primary"}
                onClick={() => setValue("typeOfDelivery", "delivery", { shouldValidate: true })}
              />
            </div>

            {errors.typeOfDelivery && (
              <p className="text-red-500 text-sm">{errors.typeOfDelivery.message}</p>
            )}
          </div>


          {methodDelivery === "delivery" && (
            <div>
              <h3 className="text-[#292929] font-semibold text-lg">DATOS ADICIONALES</h3>
              <div className="flex flex-col gap-3 pt-2">
                <BaseInput
                  id="address"
                  label="Direccion de entrega"
                  type="text"
                  register={register}
                  errors={errors}
                />
              </div>
            </div>
          )}
          <div>
            <h3 className="text-[#292929] font-semibold text-lg">TIPO DE PAGO</h3>
            <div className="flex flex-col gap-3 pt-2">
              <input type="hidden" {...register("typeOfPayment")} />
              <BaseButton
                content="EFECTIVO"
                color={methodPayment === "cash" ? "secondary" : "primary"}
                onClick={() => setValue("typeOfPayment", "cash", { shouldValidate: true })}
              />
              <BaseButton
                content="TARJETA DE CREDITO"
                color={methodPayment === "credit" ? "secondary" : "primary"}
                onClick={() => setValue("typeOfPayment", "credit", { shouldValidate: true })}
              />
            </div>
            {errors.typeOfPayment && (
              <p className="text-red-500 text-sm">{errors.typeOfPayment.message}</p>
            )}
          </div>

          {methodPayment === "credit" && (
            <>
              {/* MÉTODOS DE PAGO */}
              <div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#292929] font-semibold text-lg">METODOS DE PAGO</h3>
                  <h4 className="text-[#208572] font-semibold">TITULAR: JUAN RAMIREZ</h4>
                </div>
                <section className="mt-2 flex flex-col gap-3">
                  <figure className="flex gap-2">
                    <img
                      src="/images/test_img2.jpg"
                      className="object-cover max-[300px]:w-1/2 w-[40%] h-12"
                    />
                    <div className="font-medium">
                      <p className="text-[#292929]">CUENTA BANCARIA</p>
                      <p className="text-[#208572]">123-45678912-0-34</p>
                    </div>
                  </figure>
                </section>
                {selectedFile && (
                  <p className="text-sm text-gray-700 mt-2">
                    Imagen seleccionada:{" "}
                    <span className="font-semibold">{selectedFile.name}</span>
                  </p>
                )}
                <div className="flex flex-col gap-2 mt-2">
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    id="fileInput"
                    onChange={(e) => {
                      if (e.target.files?.[0]) {
                        setValue("imageVoucher", e.target.files[0], { shouldValidate: true });
                      }
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => document.getElementById("fileInput")?.click()}
                    className="cursor-pointer w-full bg-[#208572] text-white py-[5px] rounded-[5px]"
                  >
                    SUBIR COMPROBANTE DE PAGO
                  </button>

                  {errors.imageVoucher && (
                    <p className="text-red-500 text-sm">{errors.imageVoucher.message}</p>
                  )}
                </div>
              </div>
            </>
          )}
          <div>
            <h3 className="text-[#292929] font-semibold text-lg">RESUMEN DE LA COMPRA</h3>
            <section className="flex flex-col gap-2 my-2">
              <div className="text-[#292929] flex justify-between gap-1 font-semibold">
                <p>Productos:</p>
                <p>S/ {totalPrice.toFixed(2)}</p>
              </div>
              {methodDelivery === "delivery" && (
                <div className="text-[#292929] flex justify-between gap-1 font-semibold">
                  <p>Envio:</p>
                  <p>S/ 5.00</p>
                </div>
              )}
            </section>
            <hr className="text-[#696969]" />
            <p className="text-[#292929] flex justify-between gap-1 font-semibold text-xl mt-5">
              <span>Total:</span>
              <span>S/ {(totalPrice + (methodDelivery === "delivery" ? 5 : 0)).toFixed(2)}</span>
            </p>
          </div>

          {methodPayment === "cash" && methodDelivery === "delivery" && (
            <BaseInput
              id="notes"
              label="Monto aproximado con el que pagara los productos?"
              type="text"
              register={register}
              errors={errors}
            />
          )}
          <div className="flex flex-col gap-2">
            <BaseButton
              content="REGRESAR AL CARRITO"
              color="primary"
            />
            <BaseButton
              type="submit"
              content="COMPRAR"
              color="secondary"
            />
          </div>
        </div>
      </form>
      <MainNavbar />
    </section>
  );
}
