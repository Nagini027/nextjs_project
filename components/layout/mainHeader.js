import Link from "next/link";
import classes from './main-header.module.css';

function MainHeader(){
    return <header  className={classes.header}>
        <div className={classes.logo}>
        {/* <img src='' href=" /> */}
        LOGO

        </div>
        <nav className={classes.logo}>
           Menu
        </nav>
        <div>
          <Link href='/login'><button className={classes.btn}>Login</button>
           &nbsp; <button className={classes.btn}>SignUp</button>
           &nbsp;</Link>
        </div>
    </header>
}
export default MainHeader;