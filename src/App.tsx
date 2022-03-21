import { useEffect, useState } from 'react'
import axios from 'axios';
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'
import type { ProductType } from './types/product';
import { add, list, remove } from './api/product';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import Home from './pages/Home';
import Product from './pages/Product';
import AdminLayout from './pages/layouts/AdminLayout';
import Dashboard from './pages/Dashboard';
import ManagerProduct from './pages/ManagerProduct';
import "bootstrap/dist/css/bootstrap.min.css"
import ProductAdd from './pages/ProductAdd';
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
  const onHandlerAdd = async (product: ProductType) => {
    // call api
    const { data} = await add(product);
    setProducts([...products, data])
  }
  return (
    <div className="App">
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
        <Route path='/admin/product/add' element={<ProductAdd onAdd={onHandlerAdd}/>} />
      </Route>
      </Routes>
      </main>
    </div>
  )
}

export default App
