import classes from './menu-grid.module.css';
import MenuItem from './menu-item';

function MenuGrid(props){
   
    const { menu } = props;
      
    return (
        <ul className={classes.grid}>
        {menu.map((menus) => (
          <MenuItem key={menus.slug} menu={menu} />
        ))}
      </ul>
  
    );
}

export default MenuGrid;