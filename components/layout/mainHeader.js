import Link from "next/link";
import classes from './main-header.module.css';
import Logo from "./logo";

function MainHeader(){
    return ( 
    <header  className={classes.header}>
            <Link href="/">
             <Logo />
            </Link>
       <nav>
             <ul>
                <li>
                   <Link href="/menu">Menu</Link>
                 </li>
                 <li>
                        <Link href="/login">
                            {/* <button className={classes.btn}> */}
                            Login
                            {/* </button> */}
                       </Link>
                 </li>
                 <li>
                        <Link href="/signup">
                           {/* <button className={classes.btn}> */}
                        SignUp
                          {/* </button> */}
                        </Link>
                       
                 </li>
                 </ul>
      </nav>

        {/* <nav className={classes.logo}>
           Menu
        </nav>
        <div>
          <Link href='/login'><button className={classes.btn}>Login</button>
           &nbsp; <button className={classes.btn}>SignUp</button>
           &nbsp;</Link>
        </div> */}

    </header>
    );
}
export default MainHeader;