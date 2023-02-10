import MenuSearch from '@/components/menu/menu-search';
import Head from 'next/head';
import { Fragment } from 'react';


function AllMenusPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All Menu</title>
        <meta
          name='description'
          content='A list of all programming-related tutorials and posts!'
        />
      </Head>
       <MenuSearch />
       
      {/* <MenuList menu={props.menus} /> */}
    </Fragment>
  );
}


export default AllMenusPage;
