import Link from "next/link";
import Image from "next/image";
import classes from './menu-item.module.css';

function MenuItem(props){
    const { title, image, slug } = props.menu;
   
    const imagePath ='/images/menus/${slug}/${image}';
    const linkPath = `/menu/${slug}`;

    return (
    
        <li className={classes.post}>
        <Link href={linkPath}>
          <div className={classes.image}>
            <Image
              src={imagePath}
              alt={title}
              width={300}
              height={200}
              layout="responsive"
            />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            {/* <p>{excerpt}</p> */}
          </div>
        </Link>
      </li>
  


    );

}
export default MenuItem;