type BaseButtonProps = {
  color: 'primary' | 'secondary'
  content: string
  className?: string
  onClick?: () => void
}

export const BaseButton = ({ content, color, className, onClick }: BaseButtonProps) => {
  let buttonStyles = ''

  switch (color) {
    case 'primary':
      buttonStyles = 'outline outline-[#208572] text-[#208572] font-semibold'
      break
    case 'secondary':
      buttonStyles = 'bg-[#208572] text-white'
      break
  }

  return (
    <button
      onClick={onClick}
      className={`cursor-pointer w-full py-2 rounded-[5px] ${buttonStyles} ${className}`}
    >
      {content}
    </button>
  )
}
