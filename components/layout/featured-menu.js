import MenuGrid from '../menu/menu-grid';
// import MenuItem from '../menu/menu-item';
// import MenuList from '../menu/menu-list';
import classes from './featured-menu.module.css';

function FeaturedMenu(props) {
  return (
    <section className={classes.latest}>
      <h2>Featured Menu</h2>
      {/* <MenuList/> */}
     
      <MenuGrid menu={props.menu} />
    </section>
  );
}

export default FeaturedMenu;