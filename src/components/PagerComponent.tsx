import { ChevronRight } from 'lucide-react';

export default function PagerComponent() {
  return (
    <section className='flex justify-center items-center gap-3 my-8'>
      <div className='flex gap-1 items-center justify-center font-semibold'>
        <span className='cursor-pointer bg-[#208572] rounded-full px-3 py-[3px] grid place-items-center'>1</span>
        <span className='cursor-pointer text-[#292929] rounded-full px-2'>2</span>
        <span className='cursor-pointer text-[#292929] rounded-full px-2'>3</span>
        <span className='cursor-pointer text-[#292929] rounded-full px-2'>4</span>
      </div>
      <div className='rounded-full text-sm flex justify-center items-center text-[#292929] cursor-pointer'>
        <ChevronRight size={26} strokeWidth={3} />
      </div>
    </section>
  )
}
