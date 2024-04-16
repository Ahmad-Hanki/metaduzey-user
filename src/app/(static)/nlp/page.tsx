import Nlp from '@/components/Nlp'
import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
    title: "Nlp",
  }; 
const NlpPgae = () => {
  return (
    <div>
        <Nlp />
    </div>
  )
}

export default NlpPgae