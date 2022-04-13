import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CategoryType } from "../types/category";
import { ProductType } from "../types/product";
type ProductAddProps = {
    onAdd: (product: ProductType) => void,
    listCategory: CategoryType[]
}
type FormValues = {
    name: string,
    price: number,
    desc: string,
    category:string
    // img:string

};
const ProductAdd = (props: ProductAddProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>()
    const Navigate = useNavigate();
    // console.log(props.listCategory);
    
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        props.onAdd(data);
        Navigate('/admin/product');
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Tên</label>
                    <input type="text" {...register('name', { required: true, minLength: 5 })} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    {errors.name && errors.name.type === "required" && <span>Required</span>}
                    {errors.name && errors.name.type === "minLength" && <span>Min length</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Giá</label>
                    <input type="number"  {...register('price')} className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">mô tả</label>
                    <input type="text"  {...register('desc', { required: true, minLength: 5 })} className="form-control" id="exampleInputPassword1" />
                </div>

                <div className="mb-3">


                    <select style={{ border: "1px #ddd solid" }} {...register('category')} id="fruit">
                        {props.listCategory?.map((item, index) => {
                            return (
                                <option value={item._id as number}>{item.name}</option>
                            )
                        })}

                    </select>


                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default ProductAdd