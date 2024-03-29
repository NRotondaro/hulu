import { useRouter } from 'next/router';
import requests from '../utils/requests';

export const Nav = () => {
  const router = useRouter();
  return (
    <nav className='relative'>
      <div className='flex space-x-10 overflow-x-scroll whitespace-nowrap py-2 px-10 text-2xl scrollbar-hide sm:space-x-20 sm:px-20'>
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className='last-pr-24 transform cursor-pointer transition duration-100 hover:scale-125 hover:text-white active:text-red-500'>
            {title}
          </h2>
        ))}
      </div>
      <div className='absolute top-0 right-0 h-10 w-1/12 bg-gradient-to-l from-[#06202A]'></div>
    </nav>
  );
};
