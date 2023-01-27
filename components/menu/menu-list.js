import classes from './menu-list.module.css';
import MenuGrid from './menu-grid';

function MenuList(props){

  
    return (
        <section className={classes.menus}>
        <h1>All Menus</h1>
        <MenuGrid menus={props.menu} />
      </section>
  
        );

}
export default MenuList;