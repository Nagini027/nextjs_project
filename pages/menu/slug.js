import Head from 'next/head';
import { Fragment } from 'react';
import MenuContent from '@/components/menu-detail/menu-content';

function MenuDetailPage(props) {
    return (
      <Fragment>
        <Head>
          <title>{props.menu.title}</title>
          <meta name='description' 
          // content={props.menu.excerpt}
           />
        </Head>
        <MenuContent menu={props.menu} />
      </Fragment>
    );
  }
  export default MenuDetailPage;



  