import Head from 'next/head';
import { Fragment } from 'react';
import MenuContent from '@/components/menu-detail/menu-content';
import { getMenuData, getMenusFiles } from '../../lib/menus-util';

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
  export function getStaticProps(context) {
    const { params } = context;
    const { slug } = params;
  
    const menuData = getMenuData(slug);
  
    return {
      props: {
        menu: menuData,
      },
      revalidate: 600,
    };
  }
  
  export function getStaticPaths() {
    const menuFilenames = getMenusFiles();
  
    // const slugs = menuFilenames.map((fileName) => fileName.replace(/\.md$/, ''));
  
    return {
      paths: slugs.map((slug) => ({ params: { slug: slug } })),
      fallback: false,
    };
  }
  
  export default MenuDetailPage;



  