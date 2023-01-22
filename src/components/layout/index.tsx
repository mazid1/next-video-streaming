import { PropsWithChildren } from 'react'
import Footer from './Footer'
import Toolbar from './Toolbar'

function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Toolbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
