import { BaseButton } from "@/shared";
import { useCartStore } from "@/stores/cart.store";
import { useVoucherStore } from "@/stores/voucher.store";
import { useNavigate } from "react-router-dom";

export default function VoucherView() {
  const navigate = useNavigate();
  const { data } = useVoucherStore();
  const { products } = useCartStore();

  const totalPrice = products.reduce((acc, item) => acc + item.price * item.quantity, 0)

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;


  if (!data.nOrden) {
    return <>
      <p>No hay orden disponible</p>
      <button onClick={() => navigate('/')} className="outline outline-1 p-1 cursor-pointer m-1">Volver a pagina principal</button>
    </>;
  }

  return (
    <section className="select-none relative flex flex-col max-w-sm print:m-0 m-auto min-h-screen bg-white"
      style={{ fontFamily: "Oswald" }}
    >
      <h1 className="text-center text-[#208572] font-bold text-2xl py-5">
        VOUCHER DE COMPRA
      </h1>
      <section className="text-sm flex flex-col gap-1 font-medium py-5 px-10 print:px-0 text-[#292929] border-y border-[#6C676380]">
        <div className="flex justify-between items-center">
          <p>Fecha:</p>
          <p>{formattedDate}</p>
        </div>
        <div className="flex justify-between items-center">
          <p>Orden:</p>
          <p>{data.nOrden.slice(0,4) || 'xxxx'}-{data.nOrden.slice(-4) || 'xxxx'}</p>
        </div>
        <div className="flex justify-between items-center">
          <p>Cliente:</p>
          <p>{data.name}</p>
        </div>
        <div className="flex justify-between items-center">
          <p>Telf:</p>
          <p>{data.phone}</p>
        </div>
      </section>
      <section className="text-sm flex flex-col gap-1 font-medium py-5 px-10 print:px-0 text-[#292929] border-b border-[#6C676380]">
        <h3>PRODUCTOS</h3>
        {products && products.map(pr => (
          <div key={pr.id} className="flex justify-between items-start gap-3">
            <p>{pr.quantity}x {pr.name}</p>
            <p className="text-right whitespace-nowrap">S/ ${(pr.price).toFixed(2)}</p>
          </div>
        ))}
      </section>
      <section className="text-sm flex flex-col gap-1 font-medium py-5 px-10 print:px-0 text-[#292929] border-b border-[#6C676380]">
        <div className="mb-3 flex items-center justify-between gap-3">
          <h3 className="">TOTAL</h3>
          <p className="text-right whitespace-nowrap text-xl font-semibold">
            S/ {(totalPrice + (data.delivery === 'delivery' ? 5 : 0)).toFixed(2)}
          </p>
        </div>
        <div className="flex justify-between items-start gap-3">
          <p>Pago:</p>
          <p>{data.payment === 'cash' ? 'En efectivo' : 'Transferencia Bancaria'}</p>
        </div>
        <div className="flex justify-between items-start gap-3">
          <p>Entrega:</p>
          <p>{data.delivery === 'delivery' ? 'Entrega a Domicilio' : 'En Local'}</p>
        </div>
        {data.address && (
          <div className="flex justify-between items-start gap-3">
            <p>Direccion de entrega:</p>
            <p>{data.notes}</p>
          </div>
        )}
        {data.notes && (
          <div className="flex justify-between items-start gap-3">
            <p>Notas Extras:</p>
            <p>{data.notes}</p>
          </div>
        )}
      </section>
      <section className="mt-5 text-[#292929] px-10 print:px-0 text-xs">
        <h3 className="font-bold text-sm mb-2">INSTRUCCIONES</h3>
        <p>Imprime este ticket o tomar una captura de este comprobante. Si es entregado en tienda debera mostrarlo para confirmar su orden y recibir su pedido.</p>
      </section>
      <section className="flex flex-col gap-4 px-10 print:px-0 mt-5">
        <BaseButton
          type="button"
          color="secondary"
          content="Imprimir"
          onClick={() => window.print()}
        />
        <BaseButton
          type="button"
          color="primary"
          content="Volver a la tienda"
          onClick={() => navigate('/')}
        />
      </section>
    </section>
  )
}
