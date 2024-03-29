import Image from 'next/image';
import { HandThumbUpIcon } from '@heroicons/react/24/outline';
import { forwardRef } from 'react';

export interface ThumbnailProps {
  result: {
    backdrop_path: string;
    poster_path: string;
    overview: string;
    title: string;
    original_name: string;
    media_type: string;
    release_date: string;
    first_air_date: string;
    vote_count: string;
  };
}

export const Thumbnail = forwardRef<HTMLDivElement, ThumbnailProps>(
  ({ result }: ThumbnailProps, ref) => {
    const BASE_URL = 'https://image.tmdb.org/t/p/original/';

    return (
      <div
        ref={ref}
        className='group transform cursor-pointer p-2 transition duration-200 ease-in hover:z-50 sm:hover:scale-105'>
        <Image
          layout='intrinsic'
          src={`${BASE_URL}${result.backdrop_path || result.poster_path}`}
          height={1080}
          width={1920}
          alt='thumbnail'
        />
        <div className='p-2'>
          <p className='max-w-md truncate'>{result.overview}</p>

          <h2 className='mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold'>
            {result.title || result.original_name}
          </h2>

          <div>
            <p className='flex items-center opacity-0 group-hover:opacity-100'>
              {result.media_type && `${result.media_type} •`}{' '}
              {result.release_date || result.first_air_date} •{' '}
              <HandThumbUpIcon className='mx-2 h-5' /> {result.vote_count}
            </p>
          </div>
        </div>
      </div>
    );
  },
);

Thumbnail.displayName = 'Thumbnail';
