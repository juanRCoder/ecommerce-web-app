
type BaseInputProps = {
  label: string;
  type: string;
  name: string;
  className?: string
  isRequired?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const BaseInput = ({ label, type, name, className, isRequired, onChange }: BaseInputProps) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <label htmlFor={name} className="text-[#292929] text-sm">{label}</label>}
      <input
        type={type}
        name={name}
        onChange={onChange}
        style={{ fontFamily: "Inter" }}
        className={`w-full rounded-lg bg-transparent p-2 text-[#52514F] border border-[#29292930] placeholder:text-[#52514F] text-sm placeholder:text-sm placeholder:font-normal outline-none ${className}`}
        required={isRequired}
      />
    </div>
  )
}
