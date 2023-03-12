import classes from './signup.module.css';
import Link from 'next/link';
import Image from 'next/image';

import React, {useState} from 'react';

function SignUpForm(){
   
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
 
  const [formErrors, setFormErrors] = useState({});
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let errors = {};

    if (!formData.name) {
      errors.name = 'Name is required';
    }

    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }

    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    if (!formData.confirmPassword) {
      errors.confirmPassword = 'Confirm Password is required';
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Submit form data to the server
      console.log('Form data:', formData);
    }
  };
    return (
            <div className={classes.main}>
             
             <form onSubmit={handleSubmit}>
                <div className={classes.row}>
                  <Image src='/images/gallery-img.jpg' width={50} height={50} />
                 
                  <h1 className={classes.h1}>SignUp</h1>
                </div>
                <label  htmlFor="email" className={classes.label}>Email :</label>
               &nbsp; &nbsp; <input 
               type="email"
               id="email"
               name = "email"
               value = {formData.email}
               onChange={handleInputChange}
               />
                {formErrors.email && <span>{formErrors.email}</span>}
                <br/>
                <br />
                
            
                <label  htmlFor="password" >Password:</label>
                <input
               
                 type="password"
                 id="password"
                  name="password"
                 value={formData.password}
                   onChange={handleInputChange}
                 
                 ></input>
                   {formErrors.password && <span>{formErrors.password}</span>}
                <br/>
                <br/>
                <label htmlFor="confirmPassword"> Confirm Password:</label>
                <input
                 type="password"
                 id="confirmPassword"
                 name="confirmPassword"
                 value={formData.confirmPassword}
                 onChange={handleInputChange}
                />
                 {formErrors.confirmPassword && (
          <span>{formErrors.confirmPassword}</span>)}
                <br/>
                <br/>
                <center>
                <button className={classes.btn}>Register</button>
                </center>

                <br/>
                <p className={classes.p}>Already Have an Account?   <Link className={classes.a} href='/login'>Login</Link></p>
                
            </form>
            
    </div>

    )
}
export default SignUpForm;