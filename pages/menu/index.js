import Head from 'next/head';
import { Fragment } from 'react';
import MenuList from '../../components/menu/menu-list';
// import { getAllMenus } from '@/lib/menus-util';
function AllMenusPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All Menus</title>
        <meta
          name='description'
          content='A list of all programming-related tutorials and posts!'
        />
      </Head>
      <MenuList menus={props.menu} />
    </Fragment>
  );
}
// export function getStaticProps() {
//   // const allMenus = getAllMenus();

//   return {
//     props: {
//       posts: allPosts,
//     },
//   };
// }



export default AllMenusPage;
