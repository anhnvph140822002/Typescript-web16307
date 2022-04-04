import React from 'react'
import { Outlet } from 'react-router-dom'


type Props = {}

const AdminLayout = (props: Props) => {
  return (
    <>
    <div>
        <header>
        <img src="src/assets/images/banner.jpg" alt="" />
        </header>
        <aside>
            Menu Admin A nhong
        </aside>
        <main>
            <Outlet />
        </main>
    </div>
    </>
  )
}

export default AdminLayout