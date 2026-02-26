'use client'

import dynamic from 'next/dynamic'

const Navbar = dynamic(() => import('./navbar').then((m) => m.Navbar), { ssr: false })

export function NavbarClient() {
  return <Navbar />
}
