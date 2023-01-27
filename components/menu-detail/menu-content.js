import classes from './menu-content.module.css';
import Image from 'next/image';
import MenuHeader from './menu-header';

function MenuContent(props){
    const {menu} = props;

    const imagePath = `/images/menus/${menu.slug}/${menu.image}`;
    return(
        <article className={classes.content}>
      <MenuHeader title={menu.title} image={imagePath} />
   </article>
        /* <Image
              src={`/images/${menu.slug}`}
              width={600}
              height={300}
            /> */
    
    );
    
}
export default MenuContent;
