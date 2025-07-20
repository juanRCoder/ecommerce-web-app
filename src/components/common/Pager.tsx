import { ChevronRight, ChevronLeft } from 'lucide-react';

type PagerProps = {
  totalPages: number;
  page: number;
  setPage: (page: number) => void;
};

export const Pager = ({ totalPages, page, setPage }: PagerProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handleBefore = () => {
    if (page > 1) setPage(page - 1)
  }

  const handlePageClick = (num: number) => {
    if (num !== page) setPage(num);
  };

  return (
    <section className='flex justify-center items-center gap-3 my-8'>
      <div
        className={`rounded-full text-sm flex justify-center items-center text-[#292929] cursor-pointer ${page === 1 ? 'invisible' : ''
          }`}
        onClick={handleBefore}
      >
        <ChevronLeft size={26} strokeWidth={3} />
      </div>
      <div className='flex gap-1 items-center justify-center font-semibold'>
        {pages.map((num) => (
          <span
            key={num}
            className={`cursor-pointer rounded-full px-3 py-[3px] grid place-items-center 
              ${page === num ? 'bg-[#208572] text-white' : 'text-[#292929]'}`}
            onClick={() => handlePageClick(num)}
          >
            {num}
          </span>
        ))}
      </div>
      <div
        className={`rounded-full text-sm flex justify-center items-center text-[#292929] cursor-pointer ${page === totalPages ? 'invisible' : ''
          }`}
        onClick={handleNext}
      >
        <ChevronRight size={26} strokeWidth={3} />
      </div>
    </section>
  )
}
