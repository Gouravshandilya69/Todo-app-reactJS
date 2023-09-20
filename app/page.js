'use client'
import { NextUIProvider } from '@nextui-org/react'

import Createcard from "./Components/Createcard";
export default function Home() {
  return (
    <NextUIProvider>
     <Createcard/>
     </NextUIProvider>
  )
}
