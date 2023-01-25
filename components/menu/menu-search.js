import  classes from '/menu-search.module.css';
function MenuSearch(props){
    const yearInputRef = useRef();
    const monthInputRef = useRef();
    function submitHandler(event){
         event.preventDefault();
        
         const selectedMenu = yearInputRef.current.value;
         const selectedCost = monthInputRef.current.value;
         
         props.onSearch(selectedYear, selectedMonth);
    }
    
    return( 
        <form className={classes.form} onSubmit={submitHandler}>
         <div className={classes.control}>
            <div className={classes.control}>
                <label htmlFor="menu">Menu</label>
                <select id="menu" ref={menuInputRef}>
                    <option value= "Biryani">Biryani</option>
                    <option value="Tifins">Tifins</option>
                    <option value="pizza">Pizza</option>
                    <option value="fastfood">Fastfood</option>
                    <option value="shakes">Shakes</option>
                    
                </select>
            </div>
         <div className={classes.control}>
            <label htmlFor="sort">Sort by</label>
            <select id="sort" ref={sortInputRef}>
                <option value = "1"></option>
                <option value = "2">February</option>
                <option value = "3">March</option>
                <option value = "4">April</option>
                <option value = "5">May</option>
                <option value = "6">June</option>
                <option value = "7">July</option>
                <option value = "8">August</option>
                <option value = "9">September</option>
                <option value = "10">October</option>
                <option value = "11">November</option>
                <option value = "12">December</option>           
        
            </select>
            </div>
         </div>
         <Button>Find Events</Button>
       </form>
       );
}
export default MenuSearch;