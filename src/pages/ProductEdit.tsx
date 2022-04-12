import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { read } from '../api/product';
import { ProductType } from '../types/product';

type ProductEditProps = {
    onUpdate: (product: ProductType) => void
}

type FormInputs = {
    name: string,
    price: number,
    desc: string
}

const ProductEdit = (props: ProductEditProps) => {
    const { id } = useParams();
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();
    const navigate = useNavigate();

    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(_id);
            reset(data);
        }
        getProduct();
    }, []);

    const onSubmit: SubmitHandler<FormInputs> = data => {
        console.log(data);
        props.onUpdate(data);
        navigate('/admin/product');

    }
    return (
         <div>
         <form onSubmit={handleSubmit(onSubmit)}>
             <div className="mb-3">
                 <label htmlFor="exampleInputEmail1" className="form-label">Tên</label>
                 <input type="text" placeholder='Tên sản phẩm' {...register('name')}/>
             </div>
             <div className="mb-3">
                 <label htmlFor="exampleInputPassword1" className="form-label">Giá</label>
                 <input type="number" placeholder='Giá sản phẩm' {...register('price')}/>
             </div>
             <button type="submit" ref="http://localhost:3001/admin/product" className="btn btn-primary"/>Update
         </form>
     </div>
    )
}
export default ProductEdit