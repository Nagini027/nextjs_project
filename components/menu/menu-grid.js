import classes from './menu-grid.module.css';
import MenuItem from './menu-item';

function MenuGrid(props){
   
    const { menus } = props;
      
    return (
        <ul className={classes.grid}>
        {menus.map((menu) => (
          <MenuItem key={menu.slug} menu={menu} />
        ))}
      </ul>
  
    );
}

export default MenuGrid;