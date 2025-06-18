import { Mail, Phone, User, ClipboardList, Heart, LogOut } from "lucide-react";
import NavbarComponent from "../components/NavbarComponent";

export default function UserProfile() {
  return (
    <section className="select-none relative flex flex-col justify-between max-w-sm m-auto min-h-screen bg-white"
      style={{ fontFamily: "Oswald" }}
    >
      <div className='mb-28'>
        <div className='flex items-center justify-center gap-2'>
          <User color='#208572' size={32} strokeWidth={2} />
          <h1 className="text-center text-[#208572] font-bold text-2xl py-5">
            Perfil
          </h1>
        </div>
        <section className="px-4 flex items-center gap-8">
          <div className="inline-flex rounded-full border-[3px] border-[#208572] p-2">
            <User color='#208572' size={56} strokeWidth={2.3} className="" />
          </div>
          <div className=" text-[#292929]">
            <p className="font-semibold text-2xl pb-1">Juan Ramirez</p>
            <p className="leading-1 spacing-2 tracking-wider text-sm font-light items-center flex gap-1"><Mail size={18} color="#29292989" /> juanRamirez@gmail.com</p>
            <p className="leading-1 spacing-2 tracking-wider text-sm font-light items-center flex gap-1"><Phone size={18} color="#29292989" /> 987-654-321</p>
          </div>
        </section>
        <section className="mt-4">
          <div className="px-5 py-3 flex items-center gap-4 font-mediu text-lg border-b border-[#29292945]">
            <ClipboardList color="#208572" size={28} />
            <p className="text-[#292929] cursor-pointer">Mis Ordenes</p>
          </div>
          <div className="px-5 py-3 flex items-center gap-4 font-mediu text-lg border-b border-[#29292945]">
            <Heart color="#208572" size={28} />
            <p className="text-[#292929] cursor-pointer">Favoritos</p>
          </div>
          <div className="px-5 py-3 flex items-center gap-4 font-mediu text-lg">
            <LogOut color="#208572" size={28} />
            <p className="text-[#292929] cursor-pointer">Cerrar Sesion</p>
          </div>
        </section>
      </div>
      <NavbarComponent />
    </section>
  )
}
