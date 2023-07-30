import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

import { firebaseAuth } from '../../utils/firebase-config';
import './login.scss';

 
const SignIn = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleLogin = async() => {
       try {
        await signInWithEmailAndPassword(firebaseAuth, email, password)
       } catch (error) {
        console.log(error)
       }
    }

     onAuthStateChanged(firebaseAuth, (currentUser)=> {
        if(currentUser) navigate('/')
    })

  return (
    <div className='signin'>
        <div className="signin_content">
            <span className='head'>Sign In</span>
            <input type="email" placeholder='username' className='input'
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
            />
            <input type="password" placeholder='password' className='input'
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
            />
            <span className='forget'>forget password?</span>
            <button className='custom_button' onClick={handleLogin}>Sign In</button>

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