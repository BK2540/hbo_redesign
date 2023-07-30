import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Google } from '@mui/icons-material';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../../utils/firebase-config';
import './signup.scss';

 
const SignUp = () => {

    const [formValues, setFormValues] = useState({email: "", password: "", username: ""})
    const navigate = useNavigate()

    const handleSignIn =  async () => {
        try{
            const{email, password, username} = formValues;
            await createUserWithEmailAndPassword(firebaseAuth, email, password, username)
        }catch (err){
            console.log(err);
        }
    }

    onAuthStateChanged(firebaseAuth, (currentUser)=> {
        if(currentUser) navigate('/')
    })

  return (
    <div className='signup'>
        <div className="signin_content">
            <span className='head'>Sign Up</span>
            <input type="email" placeholder='example@gmail.com' name='email' className='input'
            value={formValues.email}
            onChange={(e)=>setFormValues({
                ...formValues, [e.target.name]: e.target.value
            })}
            />
            <input type="text" placeholder='username' name='username' className='input'
            value={formValues.username}
            onChange={(e)=>setFormValues({
                ...formValues, [e.target.name]: e.target.value
            })}
            />
            <input type="password" placeholder='password' name='password' className='input'
            value={formValues.password}
            onChange={(e)=>setFormValues({
                ...formValues, [e.target.name]: e.target.value
            })}
            />
            <button className='custom_button' onClick={handleSignIn}>Sign Up</button>
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