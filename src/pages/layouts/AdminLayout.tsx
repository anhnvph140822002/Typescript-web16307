import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const AdminLayout = (props: Props) => {
  return (
    <div>
        <header>
            Header admin hí anh em
        </header>
        <aside>
            Menu Admin A nhong
        </aside>
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default AdminLayout