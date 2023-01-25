import classes from './menu-content.module.css';
import Image from 'next/image';

function MenuContent(props){
    return(
        <Image
              src={`/images/${menu.slug}`}
              width={600}
              height={300}
            />
    

    );
}
export default MenuContent;
