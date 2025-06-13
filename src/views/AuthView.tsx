import { Store } from "lucide-react";
import { useState } from "react";

export default function AuthView() {
  const [toggleForm, setToggleForm] = useState<boolean>(false)

  return (
    <section className="select-none relative flex flex-col max-w-sm m-auto min-h-screen bg-white"
      style={{ fontFamily: "Oswald" }}
    >
      <div className='px-2'>
        <div className='flex items-center justify-center gap-2'>
          <Store color='#208572' size={32} strokeWidth={2} />
          <h1 className="text-center text-[#208572] font-bold text-2xl py-5">
            Mi Tienda Online
          </h1>
        </div>
        {
          toggleForm ? (
            <>
              {/* LOGIN */}
              <h2 className="text-[#208572] font-bold">INICIAR SESION</h2>
              <form id="loginForm" className="flex flex-col gap-3 mt-4">
                <div className="text-[#292929] flex flex-col gap-1">
                  <label className="text-sm">Correo Electronico (email)</label>
                  <input type="email" className="text-sm outline outline-[#2929294D] rounded-[5px] p-1 px-3" style={{ fontFamily: "Inter" }} required />
                </div>
                <div className="text-[#292929] flex flex-col gap-1">
                  <label className="text-sm">Contraseña</label>
                  <input type="password" className="text-sm outline outline-[#2929294D] rounded-[5px] p-1 px-3" style={{ fontFamily: "Inter" }} required />
                </div>
              </form>
              <button form="loginForm" type="submit" className='mt-4 cursor-pointer w-full bg-[#208572] py-[5px] rounded-[5px]'>
                REGISTRARSE
              </button>
              <p className="text-sm mt-4 text-center text-[#292929]">
                no estas registrado?
                <a onClick={() => setToggleForm(!toggleForm)} className="text-[#208572] underline cursor-pointer pl-1">Registrarse</a>
              </p>
            </>
          ) : (
            <>
              {/* REGISTRO */}
              <h2 className="text-[#208572] font-bold">REGISTRO</h2>
              <form id="registerForm" className="flex flex-col gap-3 mt-4">
                <div className="text-[#292929] flex flex-col gap-1">
                  <label className="text-sm">Nombre y Apellido</label>
                  <input type="text" className="text-sm outline outline-[#2929294D] rounded-[5px] p-1 px-3" style={{ fontFamily: "Inter" }} required />
                </div>
                <div className="text-[#292929] flex flex-col gap-1">
                  <label className="text-sm">Correo Electronico (email)</label>
                  <input type="email" className="text-sm outline outline-[#2929294D] rounded-[5px] p-1 px-3" style={{ fontFamily: "Inter" }} required />
                </div>
                <div className="text-[#292929] flex flex-col gap-1">
                  <label className="text-sm">Telefono Movil</label>
                  <input type="number" className="text-sm outline outline-[#2929294D] rounded-[5px] p-1 px-3" style={{ fontFamily: "Inter" }} required />
                </div>
                <div className="text-[#292929] flex flex-col gap-1">
                  <label className="text-sm">Contraseña</label>
                  <input type="password" className="text-sm outline outline-[#2929294D] rounded-[5px] p-1 px-3" style={{ fontFamily: "Inter" }} required />
                </div>
              </form>
              <button form="registerForm" type="submit" className='mt-4 cursor-pointer w-full bg-[#208572] py-[5px] rounded-[5px]'>
                REGISTRARSE
              </button>
              <p className="text-sm mt-4 text-center text-[#292929]">
                ya estas logueado?
                <a onClick={() => setToggleForm(!toggleForm)} className="text-[#208572] underline cursor-pointer pl-2">Iniciar Session</a>
              </p>
            </>
          )
        }
      </div>
    </section>
  )
}
