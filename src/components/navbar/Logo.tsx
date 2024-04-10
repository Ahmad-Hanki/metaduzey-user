import logo from '@/assets/images/logo.png'
import Image from 'next/image';

const Logo = () => {
  return <div className="relative overflow-hidden aspect-[3/1] w-48">
    <Image fill alt='photo' src={logo} className='object-cover object-center'/>
  </div>;
};

export default Logo;
