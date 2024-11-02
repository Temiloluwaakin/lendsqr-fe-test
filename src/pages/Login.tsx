import { useForm } from 'react-hook-form';
import union from '../components/images/Union.png'
import lendsqr from '../components/images/lendsqr.png'
import loginImg from '../components/images/pablo-sign-in 1.png'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


type LoginFormData = {
    email: string;
    password: string;
}

const Login = () => {

    const { register, handleSubmit, formState: {errors} } = useForm<LoginFormData>();
    const [errorMessage, setErrorMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);   

    };
    
    const onSubmit = handleSubmit((data) => {
        setErrorMessage('');
        setIsSubmitting(true);
        console.log(data)
        navigate("/dashboard");
    });


    return ( 
        <div className="login">
            <div className="login-left-side">
                <div className='login-logo'>
                    <img src={union} alt="union-logo" className='union-logo'/>
                    <img src={lendsqr} alt="lendsqr-logo" className='lendsqr-logo'/>
                </div>

                <img src={loginImg} alt='login-image' className='login-img'/>
            </div>
            
            <div className="login-right-side">
                <h1>Welcome!</h1>

                <p>Enter details to login.</p>

                <form onSubmit={onSubmit}>
                    <div className="form-page">
                        <div>
                            <input 
                                type="email"
                                placeholder="Email"
                                {...register("email", {required: "This field is required"})}
                            ></input><br/>
                            {errors.email && (
                                <span style={{fontWeight:'lighter',fontSize:'13px',color:'red'}}> {errors.email.message} </span>
                            )}
                        </div>

                        <div className='password-input'>
                            <input 
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Password"
                                {...register("password", 
                                    {required: "This field is required", minLength: {value:6,message:"At least 6 characters"}}
                                )}
                            ></input>
                            <span className="show-password" onClick={togglePasswordVisibility}>
                                Show
                            </span><br/>
                            {errors.password && (
                                <span style={{fontWeight:'lighter',fontSize:'13px',color:'red'}}> {errors.password.message} </span>
                            )}
                        </div>

                        <p> <Link to='/' style={{color:'inherit'}}> FORGOTTEN PASSWORD </Link></p>

                        <span>
                            <button type="submit">
                                {isSubmitting ? 
                                    <h3 className="loader" style={{margin:'0px auto'}}>.</h3> 
                                    : 
                                    'LOG IN'
                                }
                            </button>
                            {errorMessage && 
                                <p className="error" style={{marginTop:'2px',color:'red',fontSize:'13px'}}>
                                    {errorMessage}
                                </p>
                            }
                        </span>
                    </div>
                    
                </form>
            </div>
        </div>
     );
}
 
export default Login;