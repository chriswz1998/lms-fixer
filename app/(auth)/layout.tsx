import React from 'react'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
      <div
          className={ "absolute w-full h-full flex items-center justify-center bg-[url('https://dashboard.clerk.com/assets/signin-bg.svg')] bg-cover bg-no-repeat"}>
        { children }
      </div>
  )
}

export default AuthLayout
