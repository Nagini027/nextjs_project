// import  classes from '/menu-search.module.css';
import classes from './menu-search.module.css';
import Button from '../ui/button';
function MenuSearch(props){
    // const yearInputRef = useRef();
    // const monthInputRef = useRef();
    // function submitHandler(event){
    //      event.preventDefault();
        
    //      const selectedMenu = yearInputRef.current.value;
    //      const selectedCost = monthInputRef.current.value;
         
    //      props.onSearch(selectedYear, selectedMonth);
    // }
    
    return( 
        <form className={classes.form} >
         <div className={classes.control}>
            <div className={classes.control}>
                <label htmlFor="menu">Menu</label>
                <select id="menu" >
                    <option value= "Biryani">Biryani</option>
                    <option value="Tifins">Tifins</option>
                    <option value="pizza">Pizza</option>
                    <option value="fastfood">Fastfood</option>
                    <option value="shakes">Shakes</option>
                    
                </select>
            </div>
         <div className={classes.control}>
            <label htmlFor="sort">sortby</label>
            <select id="sort">
                <option value = "1"></option>
                <option value = "2">high to low</option>
                <option value = "3">low to high</option>
                <option value = "4"></option>
               
            </select>
            </div>
         </div>
         <Button>Search</Button>
       </form>
       );
}
export default MenuSearch;