import { useEffect, useState } from 'react'
import axios from 'axios';
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'
import type { ProductType } from './types/product';
import { add, list, remove, update } from './api/product';
import {listCate,addCate,removeCate, updateCate} from './api/category'
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
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import CategoryManager from './pages/CategoryManager';
import CategoryAdd from './pages/categoryAdd';
import CategoryEdit from './pages/CategoryEdit';
import { CategoryType } from './types/category';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css"
// import {ConfigProvider} from 'antd';

// ConfigProvider.config({
//   theme: {
//     primaryColor: '#25b864',
//   },
// });
function App() {
  const [products, setProducts,] = useState<ProductType[]>([]);
  // const [count, setCount] = useState<number>(0);
  const [Categorys,setCategorys] = useState <CategoryType[]>([]);
  

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    }
    getProducts();

    const getCategory = async () =>{
      const {data} = await  listCate();
      console.log(data);
      
      setCategorys(data);
    }
    getCategory();
  }, [])

  const onHandleRemove = async (id: number) => {
    // xoa tren API
    await remove(id);
    // reRender
    setProducts(products.filter(item => item._id !== id));
  }

  const onHandlerAdd = async (product: ProductType) => {
    // call api
    const { data } = await add(product);
    setProducts([...products, data])
  }
  //update
  const onHandleUpdate = async (product: ProductType) => {
    console.log(product);
    const { data } = await update(product)
    setProducts(products.map(item => item._id == data.id ? data : item));
  }

  //// category


  // xoa
  const onCategoryRemove = async (id: number) => {
    await removeCate(id);
    //reRender
    setCategorys(Categorys.filter(item => item._id !== id));
  }

  const onCategoryAdd = async (Category: CategoryType) => {
    //call api
    const { data } = await addCate(Category);
    setCategorys([...Categorys, data])
  }

  //update
  const onCategoryUpdate = async (Category: CategoryType) => {
    console.log(Category);
    const { data } = await updateCate(Category);
    setCategorys(Categorys.map(item => item._id == data.id ? data : item));

  }
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<WebsiteLayout />}>
            <Route path="detail">
              <Route path=":id/products" element={<Productdetal products={products} />} />
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
            <Route path='category'>
              <Route index element={<CategoryManager data={Categorys} onRemove={onCategoryRemove} />} />
              <Route path="add" element={<CategoryAdd onAdd={onCategoryAdd} />} />
              <Route path=":id/edit" element={<CategoryEdit onUpdate={onCategoryUpdate} />} />

            </Route>
          </Route>
        </Routes>
      </main>
    </div>
  )
}
// mongoose.connect('mongodb://localhost:27017/typescript');

export default App
