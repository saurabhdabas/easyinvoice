import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { GrNorton } from "react-icons/gr";
import { AiFillMail,AiFillLock } from "react-icons/ai";

const Login = () => {
  const [inputs,setInputs]=useState({email:'',password:''});
  const [tagline,setTagline]=useState('');
  const [finalTagline,setFinalTagline]=useState('We make invoicing easy for you!');
  const [index, setIndex] = useState(0);
 
  let navigate = useNavigate();
  const handleSubmission = (event) => {
    event.preventDefault();

    axios.post('http://localhost:8080/user-data',{data:inputs})
    .then((response)=>{
      setInputs({email:'',password:''});
      localStorage.setItem('user',JSON.stringify({token:response.data.token,avatar:response.data.avatar}));
      navigate('/dashboard');
      })
    .catch((err)=>console.log(err))

  }

  useEffect(() => {
    if (index < finalTagline.length) {
      setTimeout(() => {
        setTagline(tagline + finalTagline[index])
        setIndex(index + 1)
      }, 40)
    }
  }, [index])

  return (
    <div className='login'>
      <div className='login__brand-wrapper'>
        <GrNorton size={100}/>
        <h1>Easy Invoice</h1>
        <h2>{tagline}</h2>
      </div>
      <div className='login__credentials-wrapper'>
        <form className='login__form' onSubmit={handleSubmission}>
          <h1 className='login__form-title'>Log in</h1>
          <div className='login__email'>
            <span>
              <label htmlFor='email'><h3>Email</h3></label>
              <AiFillMail/>
            </span>
            <input id='email' type='email' name='email' value={inputs.email} onChange={(event)=>setInputs({...inputs,email:event.target.value})} placeholder='joe@gmail.com'/>
          </div>
          <div className='login__password'>
            <span>
              <label htmlFor='password'><h3>Password</h3></label>
              <AiFillLock/>
            </span>
            <input id='password' type='password' name='password' value={inputs.password} onChange={(event)=>setInputs({...inputs,password:event.target.value})} placeholder='Enter your password'/>
          </div>
          <button className='login__submit-btn' type='submit' name='submit-button'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login;
