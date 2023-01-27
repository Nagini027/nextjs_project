import MenuGrid from '../menu/menu-grid';
import classes from './featured-menu.module.css';

function FeaturedMenu(props) {
  return (
    <section className={classes.latest}>
      <h2>Featured Menu</h2>
      <MenuGrid menus={props.menu} />
    </section>
  );
}

export default FeaturedMenu;