import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { readCate } from '../api/category';
import { CategoryType } from '../types/category';

type CategoryEditProps = {
    onUpdate: (Category: CategoryType) => void
}
type FormInputs = {

    name: string
   
}

const CategoryEdit = (props: CategoryEditProps) => {
    const { id } = useParams();
    const {register, handleSubmit, formState: {errors}, reset} = useForm<FormInputs>();
    const navigate = useNavigate();

    useEffect(() => {
        const getCategory = async () => {
            const { data } = await readCate(id);
            reset(data);
        }
        getCategory();
    }, [id]);readCate

    const onSubmit: SubmitHandler<FormInputs> = data => {
        
        props.onUpdate(data);
        navigate('/admin/category');
    } 
    
  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder='Tên danh mục' {...register('name')}/>
        
        <button>Update</button>
    </form>
  )
}

export default CategoryEdit