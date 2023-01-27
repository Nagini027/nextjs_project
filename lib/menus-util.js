// import fs from 'fs';




// export function getAllMenus() {
//     const menuFiles = getMenusFiles();
  
//     const allMenus = menuFiles.map(menuFile => {
//       return getData(menuFile);
//     });
  
//     const sortedMenus = allMenus.sort((postA, postB) => postA.date > postB.date ? -1 : 1);
  
//     return sortedMenus;
//   }
  
//   export function getFeaturedMenus() {
//     const allMenus = getAllMenus();
  
//     const featuredMenus = allMenus.filter(menu => menu.isFeatured);
  
//     return featuredMenus;
//   }