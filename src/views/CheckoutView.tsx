import { MainHeader, MainNavbar } from "@/components";
import { ShoppingCart } from "lucide-react";
import { useState, useEffect } from "react";

export default function CheckoutView() {
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [methodPayment, setMethodPayment] = useState<string>('');


  useEffect(() => {
    console.log("Name:", name);
    console.log("Phone:", phone);
  }, [name, phone])
  
  return (
    <section
      className="select-none relative flex flex-col justify-between max-w-sm m-auto min-h-screen bg-white"
      style={{ fontFamily: "Oswald" }}
    >
      <section className="flex-1 px-2 pb-3">
        <MainHeader title="CHECKOUT" icon={ShoppingCart} />

        <div className="flex flex-col gap-4 mb-4">
          <div className="outline-1 outline-black">
            <h3 className="text-[#292929] font-semibold text-lg">DATOS DEL CLIENTE</h3>
            <div className="flex flex-col gap-1 pt-1">
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-[#292929] text-sm">
                  Nombre y Apellido
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder=""
                  onChange={(e) => setName(e.target.value)}
                  style={{ fontFamily: "Inter" }}
                  className="w-full rounded-lg bg-transparent p-2 text-[#52514F] border border-[#29292930] placeholder:text-[#52514F] text-sm placeholder:text-sm placeholder:font-normal outline-none"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="phone" className="text-[#292929] text-sm">
                  Telefono Movil
                </label>
                <input
                  type="number"
                  name="phone"
                  placeholder=""
                  onChange={(e) => setPhone(e.target.value)}
                  style={{ fontFamily: "Inter" }}
                  className="w-full rounded-lg bg-transparent p-2 text-[#52514F] border border-[#29292930] placeholder:text-[#52514F] text-sm placeholder:text-sm placeholder:font-normal outline-none"
                />
              </div>
            </div>
          </div>


          <div className="outline-1 outline-black">
            <h3 className="text-[#292929] font-semibold text-lg">TIPO DE ENTREGA</h3>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => setMethodPayment("cash")}
                className="cursor-pointer w-full outline outline-[#208572] py-[5px] text-[#208572] rounded-[5px] font-semibold"
              >
                EN LOCAL
              </button>
              <button
                onClick={() => setMethodPayment("delivery")}
                className="cursor-pointer w-full outline outline-[#208572] py-[5px] text-[#208572] rounded-[5px] font-semibold"
              >
                EN DOMICILIO
              </button>
            </div>
          </div>

          {methodPayment === "delivery" && (
            <>
              {/* MÉTODOS DE PAGO */}
              <div className="outline-1 outline-black">
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

                {/* COMPROBANTE */}
                <p className="text-[#292929] text-xs font-medium my-4">
                  IMAGEN SUBIDA: imagen.png
                </p>
                <button className="cursor-pointer w-full bg-[#208572] py-[5px] rounded-[5px]">
                  SUBIR COMPROBANTE DE PAGO
                </button>
              </div>

              {/* DATOS ADICIONALES */}
              <div className="outline-1 outline-black">
                <h3 className="text-[#292929] font-semibold text-lg">DATOS ADICIONALES</h3>
                <section className="flex flex-col gap-2 mt-2">
                  <div className="text-[#292929] flex flex-col gap-1">
                    <label className="text-sm">Direccion de entrega</label>
                    <input
                      type="text"
                      className="text-sm outline outline-[#2929294D] rounded-[5px] py-2 p-1 px-3"
                      style={{ fontFamily: "Inter" }}
                      required
                    />
                  </div>
                </section>
              </div>

              <div className="outline-1 outline-black">
                <h3 className="text-[#292929] font-semibold text-lg">RESUMEN DE LA COMPRA</h3>
                <section className="flex flex-col gap-2 my-2">
                  <div className="text-[#292929] flex justify-between gap-1 font-semibold">
                    <p>Productos:</p>
                    <p>S/ 18.00</p>
                  </div>
                  <div className="text-[#292929] flex justify-between gap-1 font-semibold">
                    <p>Envio:</p>
                    <p>S/ 5.00</p>
                  </div>
                </section>
                <hr className="text-[#696969]" />
                <p className="text-[#292929] flex justify-between gap-1 font-semibold text-xl mt-5">
                  <span>Total:</span>
                  <span>S/ 24.00</span>
                </p>
              </div>

              <div className="outline-1 outline-black">
                <div className="flex flex-col gap-3">
                  <button
                    className="cursor-pointer w-full outline outline-[#208572] py-[5px] text-[#208572] rounded-[5px] font-semibold"
                  >
                    REGRESAR AL CARRITO
                  </button>
                  <button
                    className="cursor-pointer w-full outline bg-[#208572] outline-[#208572] py-[5px] rounded-[5px] font-semibold"
                  >
                    COMPRAR
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
      <MainNavbar />
    </section>
  );
}
