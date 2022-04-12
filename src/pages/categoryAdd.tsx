import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CategoryType } from "../types/category";
type CategoryAddProps = {
    onAdd: (Category: CategoryType) => void
}
type FormValues = {
    name: string,
    price: number,
    desc: string,
};
const CategoryAdd = (props: CategoryAddProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>()
    const Navigate = useNavigate();
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        props.onAdd(data);
        Navigate('/admin/category');
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Tên</label>
                    <input type="text" {...register('name', { required: true, minLength: 5 })} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
                    {errors.name && errors.name.type === "required" && <span>Required</span>}
                    {errors.name && errors.name.type === "minLength" && <span>Min length</span>}
                </div>
               
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default CategoryAdd