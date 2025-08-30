import { FieldErrors, UseFormRegister, FieldValues, Path } from "react-hook-form"

type BaseInputProps<T extends FieldValues> = {
  id: Path<T>;
  label: string;
  type: string;
  className?: string;
  isRequired?: boolean;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
};

export const BaseInput = <T extends FieldValues>({
  id,
  label,
  type,
  className,
  register,
  errors,
  isRequired
}: BaseInputProps<T>) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <label htmlFor={id} className="text-[#292929] text-sm">{label}</label>}
      <input
        id={id}
        type={type}
        style={{ fontFamily: "Inter" }}
        className={`w-full rounded-lg bg-transparent p-2 text-[#52514F] border border-[#29292930] placeholder:text-[#52514F] text-sm placeholder:text-sm placeholder:font-normal outline-none ${className}`}
        required={isRequired}
        {...register(id)}
      />
      {errors[id] && (
        <p className="text-red-500 pt-1">
          {errors[id]?.message?.toString()}
        </p>
      )}
    </div>
  );
}
