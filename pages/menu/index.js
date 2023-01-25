import Head from 'next/head';
import { Fragment } from 'react';

import MenuList from '@/components/menu/menu-list';
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
      <MenuList menus={props.menu} />
    </Fragment>
  );
}


export default AllMenusPage;
