import logo from '@/assets/images/logo.png'
import Image from 'next/image';

const Logo = () => {
  return <div className="relative overflow-hidden w-48 aspect-[2.4/1]">
    <Image fill alt='photo' src={logo} />
  </div>;
};

export default Logo;
