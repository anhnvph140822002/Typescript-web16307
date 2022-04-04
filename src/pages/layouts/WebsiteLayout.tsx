import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
type Props = {}

const WebsiteLayout = (props: Props) => {
  return (
    <div>
         <header>
            <Header/>
          </header>
        <main>
           <Outlet />
        </main>
        <Footer/>
    </div>
  )
}

export default WebsiteLayout