import { useEffect, useState } from 'react'
import axios from 'axios';
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'
import type { ProductType } from './types/product';
import { list, remove } from './api/product';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import Home from './pages/Home';
import Product from './pages/Product';
import AdminLayout from './pages/layouts/AdminLayout';
import Dashboard from './pages/Dashboard';
import ManagerProduct from './pages/ManagerProduct';
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  const [products, setProducts] = useState<ProductType[]>([]);
  // const [count, setCount] = useState<number>(0);
  
  useEffect(() => {
     const getProducts = async () => {
        const { data } = await list();
        setProducts(data);
     }
     console.log(products);
     getProducts();
  },[])

  const removeItem = async (id: number) => {
    // xoa tren API
    const { data } = await remove(id);
    // reRender
    data && setProducts(products.filter(item => item.id !== data.id));
  }
  return (
    <div className="App">
      {/* <table>
        <thead>
          <th>#</th>
          <th>Name</th>
          <th></th>
        </thead>
        <tbody>
          {products && products.map((item, index) => {
            return <tr>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>
                      <button onClick={() => removeItem(item.id)}>Remove</button>
                    </td>
                  </tr>
          })}
          
        </tbody>
      </table> */}
      {/* <header>
        <ul>
          <li><NavLink to="/">Home page</NavLink></li>
          <li><NavLink to="/product">Product</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </header> */}
      <main>
      <Routes>
        {/* <Route path="/" element={<h1>Home page</h1>} />
        <Route path="product" element={<h1>Product page</h1>} />
        <Route path="about" element={<h1> About page </h1>} /> */}
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<Home />} />
          <Route path="product" element={<Product />} />
      </Route>
      <Route path="admin" element={<AdminLayout />}> 
        <Route index element={<Navigate to="Dashboard"/>} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="product" element={<ManagerProduct data={products}/>} />
      </Route>
      </Routes>
      </main>
    </div>
  )
}

export default App
