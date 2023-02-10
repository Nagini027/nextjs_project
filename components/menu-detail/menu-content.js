import Image from 'next/image';
import classes from './menu-content.module.css';


function MenuContent(props){

    const {menu} = props;
    // const imagePath = `images/menus/${menu.slug}/${menu.image}`
    return(
        <Image
              src={`/images/${menu.slug}`}
              width={500}
              height={300}
            />
    

    );
}
export default MenuContent;
