import { LucideIcon } from "lucide-react";

interface MainHeaderProps {
  title: string;
  icon: LucideIcon;
}

export const MainHeader = ({ title, icon: Icon }: MainHeaderProps) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <Icon color="#208572" size={32} strokeWidth={2} />
      <h1 className="text-center text-[#208572] font-bold text-2xl py-5">
        {title}
      </h1>
    </div>
  )
}
