import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { signin, signup } from "../api/auth";
import { authenticate } from "../utils/localStorage";

type FormValues = {
    name: string,
    email: string,
    password: string
};
const Signin = () => {
    const { register, handleSubmit, formState: { errors}} = useForm<FormValues>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        const {data: user } = await signin(data);
        authenticate(user, () => navigate('/'))
    }
  return (
    <div>
           <form onSubmit={handleSubmit(onSubmit)}>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                    <input type="email" {...register('email', { required: true})} className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Pass</label>
                    <input type="password" {...register('password')} className="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" href="/" className="btn btn-primary">Submit</button>
            </form>
      </div>
  )
}

export default Signin