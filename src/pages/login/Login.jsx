import { Link } from 'react-router-dom';
import './login.scss';
import { Google } from '@mui/icons-material';
 
const SignIn = () => {
  return (
    <div className='signin'>
        <div className="signin_content">
            <span className='head'>Sign In</span>
            <input type="email" placeholder='username'  className='input'/>
            <input type="password" placeholder='password' className='input'/>
            <span className='forget'>forget password?</span>
            <button className='custom_button'>Sign In</button>

        <div className="signup_part">
            <p>Haven't have an account | </p>
            <Link className='sign' to='/signup'>Sign Up</Link>
            
        </div>
        
        </div>

        <div className='line'/>

        <div className="sign_google">
            <button>
                <span>Sign In with Google</span>
                <Google/>
            </button>
        </div>
    </div>
    
  )
}

export default SignIn