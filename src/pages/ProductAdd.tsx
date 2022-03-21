import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ProductType } from "../types/product";
type ProductAddProps = {
    onAdd: (product: ProductType) => void
}
type FormValues = {
    name: string,
    price: number,
    desc:string,
};
const ProductAdd = (props: ProductAddProps) => {
    const { register, handleSubmit, formState: { errors}} = useForm<FormValues>()
    const Navigate = useNavigate();
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        props.onAdd(data);
        Navigate('/admin/product');
    }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
        tên<input type="text" {...register('name', { required: true, minLength: 5})}/> = <br />
            <br />
            {errors.name && errors.name.type === "required" && <span>Required</span>}
            {errors.name && errors.name.type === "minLength" && <span>Min length</span>}
            Giá<input type="number" {...register('price')}/> <br /><br />
            Mô tả <input type="text" {...register('desc', { required: true, minLength: 5})}/><br /><br />
            {errors.desc && errors.desc.type === "required" && <span>Required</span>}
            {errors.desc && errors.desc.type === "minLength" && <span>Min length</span>}
            <button>Add</button>
        </form>
    </div>
  )
}

export default ProductAdd