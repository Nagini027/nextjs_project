import classes from './menu-list.module.css';
import MenuGrid from './menu-grid';

function MenuList(props){

    return (
        <section className={classes.posts}>
        <h1>All menu</h1>
        <MenuGrid posts={props.posts} />
      </section>
  
        );

}
export default MenuList;