import classes from './signup.module.css';
import Link from 'next/link';
import Image from 'next/image';
function SignUpForm(){
    return (
            <div className={classes.main}>
             
             <form>
                <div className={classes.row}>
                  <Image src='/images/gallery-img.jpg' width={50} height={50} />
                 
                  <h1 className={classes.h1}>SignUp</h1>
                </div>
                <label className={classes.label}>Email :</label>
               &nbsp; &nbsp; <input type="text"></input>
                <br/>
                <br />
                
                <label>Password:</label>
                <input type="text"></input>
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