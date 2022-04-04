import { useEffect, useState } from 'react'
import axios from 'axios';
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'
import type { ProductType } from './types/product';
import { add, list, remove, update } from './api/product';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import Home from './pages/Home';
import Product from './pages/Product';
import AdminLayout from './pages/layouts/AdminLayout';
import Dashboard from './pages/Dashboard';
import ManagerProduct from './pages/ManagerProduct';

import "bootstrap/dist/css/bootstrap.min.css"
import ProductAdd from './pages/ProductAdd';
import ProductEdit from './pages/ProductEdit';
import Productdetal from './pages/productDetail';
import mongoose from 'mongoose';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
// import {ConfigProvider} from 'antd';
import Test from './components/Test';
import PrivateRouter from './components/privateRouter';

// ConfigProvider.config({
//   theme: {
//     primaryColor: '#25b864',
//   },
// });
function App() {
  const [products, setProducts,] = useState<ProductType[]>([]);
  // const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    }
    getProducts();
  }, [])

  const onHandleRemove = async (id: number) => {
    // xoa tren API
    await remove(id);
    // reRender
    setProducts(products.filter(item => item.id !== id));
  }

  const onHandlerAdd = async (product: ProductType) => {
    // call api
    const { data } = await add(product);
    setProducts([...products, data])
  }
  const onHandleUpdate = async (product: ProductType) => {
    console.log(product);
    const { data } = await update(product)
    setProducts(products.map(item => item.id == data.id ? data : item));
  }
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<WebsiteLayout />}>
            <Route path="detail">
            <Route path=":id/products" element={<Productdetal products={products}/>} />
            </Route>
            <Route index element={<Home products={products} />} />
            <Route path="product" element={<Product products={products} />} />
            {/* <Route path="detal" element={<productDetail productdetal={} />} /> */}
            <Route path="signup" element={<Signup />} />
            <Route path="signin" element={<Signin />} />
          </Route>
          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="Dashboard" />} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="product">
              <Route index element={<ManagerProduct data={products} onRemove={onHandleRemove} />} />
              <Route path="add" element={<ProductAdd onAdd={onHandlerAdd} />} />
              <Route path=":id/edit" element={<ProductEdit onUpdate={onHandleUpdate} />} />
            </Route>
          </Route>
        </Routes>
      </main>
    </div>
  )
}
// mongoose.connect('mongodb://localhost:27017/typescript');

export default App
