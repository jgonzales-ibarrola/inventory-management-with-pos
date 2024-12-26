import React from 'react'
import RootNav from './components/root-nav';

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <RootNav />
      <main>{children}</main>    
    </>
  )
}

export default RootLayout