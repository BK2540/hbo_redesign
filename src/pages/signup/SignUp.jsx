import { Link } from 'react-router-dom';
import './signup.scss';
import { Google } from '@mui/icons-material';
 
const SignUp = () => {
  return (
    <div className='signup'>
        <div className="signin_content">
            <span className='head'>Sign Up</span>
            <input type="email" placeholder='example@gmail.com'  className='input'/>
            <input type="email" placeholder='username'  className='input'/>
            <input type="password" placeholder='password' className='input'/>
            <button className='custom_button'>Sign Up</button>
        </div>

        <div className="signin_part">
            <p>Haven't have an account | </p>
            <Link className='sign' to='/signin'>Sign In</Link>
            
        </div>

        <div className='line'/>

        <div className="sign_google">
            <button>
                <span>Sign Up with Google</span>
                <Google/>
            </button>
        </div>
    </div>
    
  )
}

export default SignUp