import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { signup } from "../api/auth";

type FormValues = {
    name: string,
    email: string,
    password: string
};
const Signup = () => {
    const { register, handleSubmit, formState: { errors}} = useForm<FormValues>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        signup(data);
        navigate("/signin");
    }
  return (
    <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" {...register('name', { required: true, minLength: 5})} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    {errors.name && errors.name.type === "required" && <span>Required</span>}
                    {errors.name && errors.name.type === "minLength" && <span>Min length</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                    <input type="email" {...register('email', { required: true})} className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Pass</label>
                    <input type="password" {...register('password')} className="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>




        </div>
  )
}



export default Signup