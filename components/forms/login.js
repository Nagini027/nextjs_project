import classes from './login.module.css';
import { useRef } from 'react';
import Link from 'next/link';

function LoginForm(){

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    function submitFormHandler(event){
    event.preventDefault();
 

   const enteredEmail = emailInputRef.current.value;
   const enteredPassword =  passwordInputRef.current.value;

   const reqBody = {email : enteredEmail, password: enteredPassword};

   fetch('/api/feedback',
   {
     method: 'POST',
     body: JSON.stringify(reqBody),
     headers:{
       'Content-Type':'application/json'
     }
   })
   .then(response => response.json())
   .then((data) => console.log(data));
 }

    

    
    return(
        
        <div className={classes.main}>
        
             <center>
         
             <h1 className={classes.h1}>Login</h1>
             <form onSubmit={submitFormHandler}>
                <label htmlFor='email' className={classes.label}>Email :</label>
               &nbsp; &nbsp; <input type="email" id='email' ref={emailInputRef}/>
                <br/>
                <br />
                
                <label htmlFor='password'>Password:</label>
                <input type="password" id='password'  ref={passwordInputRef}/>
                <br/>
                <br/>
                <button className={classes.btn}>Login</button>
                <br/>
                <br/>
               <p className={classes.p}>Don't have an Account? <Link className={classes.a} href='/signup'>SignUp</Link></p>
            </form>
            </center>
            
        </div>
    );
}

export default LoginForm;