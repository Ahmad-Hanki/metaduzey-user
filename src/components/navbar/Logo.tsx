'use client'
import logo from '@/assets/images/logo.png'
import TherapiesContext from '@/providers/TherapiesContext';
import TypesContext from '@/providers/TypesContext';
import { TherapyType, therapyTypes } from '@/types/types';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';

interface LogoProps {
  data:TherapyType[]
  types:therapyTypes[]
}
const Logo = ({data, types}:LogoProps) => {
  const {setTherapies} = useContext(TherapiesContext);
  const {setTypes } = useContext(TypesContext);
  const [mutate, setMutate] = useState(false);

  useEffect(() => {
    setMutate(true)
  },[])

  useEffect(() => {
    setTherapies(data);
    setTypes(types);
  },[data])

  if (!mutate) return null
  return <div className="relative overflow-hidden aspect-[3/1] w-48">
    <Image fill alt='photo' src={logo} className='object-cover object-center'/>
  </div>;
};

export default Logo;
