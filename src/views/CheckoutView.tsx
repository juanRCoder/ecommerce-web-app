import { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import { MainHeader, MainNavbar } from "@/components";
import { BaseButton, BaseInput } from "@/shared";
import { useCartStore } from "@/stores/cart.store";

export default function CheckoutView() {
  const { products } = useCartStore()
  const totalPrice = products.reduce((acc, item) => acc + item.price * item.quantity, 0)

  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [methodPayment, setMethodPayment] = useState<string>('');
  const [methodDelivery, setMethodDelivery] = useState<string>('');

  useEffect(() => {
    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Payment Method:", methodPayment);
    console.log("Delivery Method:", methodDelivery);
  }, [name, phone, methodPayment, methodDelivery])

  return (
    <section
      className="select-none relative flex flex-col justify-between max-w-sm m-auto min-h-screen bg-white"
      style={{ fontFamily: "Oswald" }}
    >
      <section className="flex-1 px-2 pb-3">
        <MainHeader title="CHECKOUT" icon={ShoppingCart} />

        <div className="flex flex-col gap-4 mb-4">
          <div>
            <h3 className="text-[#292929] font-semibold text-lg">DATOS DEL CLIENTE</h3>
            <div className="flex flex-col gap-3 pt-2">
              <BaseInput
                label="Nombre y Apellido"
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
              <BaseInput
                label="Telefono Movil"
                type="number"
                name="phone"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          <div>
            <h3 className="text-[#292929] font-semibold text-lg">TIPO DE ENTREGA</h3>
            <div className="flex flex-col gap-3 pt-2">
              <BaseButton
                content="EN LOCAL"
                color={methodDelivery === "local" ? "secondary" : "primary"}
                onClick={() => setMethodDelivery("local")}
              />
              <BaseButton
                content="A DOMICILIO"
                color={methodDelivery === "delivery" ? "secondary" : "primary"}
                onClick={() => setMethodDelivery("delivery")}
              />
            </div>
          </div>

          {methodDelivery === "delivery" && (
            <div>
              <h3 className="text-[#292929] font-semibold text-lg">DATOS ADICIONALES</h3>
              <div className="flex flex-col gap-3 pt-2">
                <BaseInput
                  label="Direccion de entrega"
                  type="text"
                  name="address"
                />
              </div>
            </div>
          )}
          <div>
            <h3 className="text-[#292929] font-semibold text-lg">TIPO DE PAGO</h3>
            <div className="flex flex-col gap-3 pt-2">
              <BaseButton
                content="EFECTIVO"
                color="primary"
                onClick={() => setMethodPayment("cash")}
              />
              <BaseButton
                content="TARJETA DE CREDITO"
                color="primary"
                onClick={() => setMethodPayment("credit")}
              />
            </div>
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
                <div>
                  <p className="text-[#292929] text-xs font-medium mt-4 mb-2">
                    IMAGEN SUBIDA: imagen.png
                  </p>
                  <button className="cursor-pointer w-full bg-[#208572] py-[5px] rounded-[5px]">
                    SUBIR COMPROBANTE DE PAGO
                  </button>
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
              label="Monto aproximado con el que pagara los productos?"
              type="text"
              name="amount"
            />
          )}
          <div className="flex flex-col gap-2">
            <BaseButton
              content="REGRESAR AL CARRITO"
              color="primary"
            />
            <BaseButton
              content="COMPRAR"
              color="secondary"
            />
          </div>
        </div>
      </section>
      <MainNavbar />
    </section>
  );
}
