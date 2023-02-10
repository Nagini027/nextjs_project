import Content from '@/components/layout/content';
import FeaturedMenu from '@/components/layout/featured-menu';
import Layout from '@/components/layout/layout';
// import Head from 'next/head'
// import Image from 'next/image';

const DUMMY_ITEMS = [
  {
    slug: 'Bakery',
    title: 'Bakery',
    image: 'gallery-img.jpg',
    isFeatured: false,
  },
  {
    id: 'e2',
    title: 'Chineese',
    slug:'Chineese',
    image: 'images/img-03.jpg',
    isFeatured: true,
  },
  {
    id: 'e3',
    title: 'Fast Food',      
    image: 'images/img-05.jpg',
    isFeatured: true,
  },
  {
    id: 'e4',
    title: 'drinks',      
    image: 'images/img-08.jpg',
    isFeatured: true,
  },
  {
    id: 'e5',
    title: 'Biryani',      
    image: 'images/img-09.jpg',
    isFeatured: true,
  },
  
  
];

 function HomePage(props) {
  
  return (
  
        <div >
            
           <Layout />
           <Content/>
           <FeaturedMenu menu = {DUMMY_ITEMS}/>
           {/* <FeaturedMenu menus={props.menus} /> */}

            
           {/* <Image src='/images/gallery-img.jpg' width={128} height={77} /> */}
             {/* <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1> */}

        </div>
      );
}
export default HomePage;
