import React,{useState,useEffect} from 'react';

const Login = () => {
  const [inputs,setInputs]=useState({email:'',password:''});
  const [tagline,setTagline]=useState('');
  const [finalTagline,setFinalTagline]=useState('We make invoicing easy for you!');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < finalTagline.length) {
      setTimeout(() => {
        setTagline(tagline + finalTagline[index])
        setIndex(index + 1)
      }, 70)
    }
  }, [index])

  const handleSubmit = () => {
    console.log("submitted");
  }

  return (
    <div className='login'>
      <div className='login__brand-wrapper'>
        <img src="/bill.png" alt="brand-logo" width="120" height="120"/>
        <h1>Easy Invoice</h1>
        <h2>{tagline}</h2>
      </div>
      <div className='login__credentials-wrapper'>
        <form className='login__form' onSubmit={(event)=>event.preventDefault()}>
          <h1 className='login__form-title'>Log in</h1>
          <div className='login__email'>
            <label htmlFor='email'><h3>Email</h3></label>
            <input id='email' type='text' name='email' value={inputs.email} onChange={(event)=>setInputs({...inputs,email:event.target.value})} placeholder='joe@gmail.com'/>
          </div>
          <div className='login__password'>
            <label htmlFor='password'><h3>Password</h3></label>
            <input id='password' type='text' name='password' value={inputs.password} onChange={(event)=>setInputs({...inputs,password:event.target.value})} placeholder='Enter your password'/>
          </div>
          <button className='login__submit-btn' name='submit-button' onClick={handleSubmit}>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login;
