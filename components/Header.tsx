import Image from 'next/image';
import { HeaderItem } from './HeaderItem';
import {
  CheckBadgeIcon,
  RectangleStackIcon,
  HomeIcon,
  BoltIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from '@heroicons/react/24/outline';

export const Header = () => {
  return (
    <header className='m-5 flex h-auto flex-col items-center justify-between sm:flex-row'>
      <div className='flex max-w-2xl flex-grow justify-evenly'>
        <HeaderItem title='HOME' Icon={HomeIcon} />
        <HeaderItem title='TRENDING' Icon={BoltIcon} />
        <HeaderItem title='VERIFIED' Icon={CheckBadgeIcon} />
        <HeaderItem title='COLLECTIONS' Icon={RectangleStackIcon} />
        <HeaderItem title='SEARCH' Icon={MagnifyingGlassIcon} />
        <HeaderItem title='ACCOUNT' Icon={UserIcon} />
      </div>
      <Image
        className='object-contain'
        src='https://links.papareact.com/ua6'
        width={200}
        height={100}
        alt='hulu-logo'
      />
    </header>
  );
};
