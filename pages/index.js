import Content from '@/components/layout/content';
import FeaturedMenu from '@/components/layout/featured-menu';
import Layout from '@/components/layout/layout';
import Head from 'next/head'
import Image from 'next/image';

const DUMMY_ITEMS = [
  {
    slug: 'Bakery',
    title: 'Bakery',
    image: 'gallery-img.jpg',
    isFeatured: false,
  },
    {
    id: 'e3',
    slug:'fastfood',
    title: 'Fast Food',      
    image: 'gallery-img-05.jpg',
    isFeatured: true,
  },
  {
    id: 'e4',
    slug:'Veg',
    title: 'Biryani',      
    image: 'gallery-img-03.jpg',
    isFeatured: true,
  },
  {

    title: 'Drinks',
    slug:'Drinks',
    image: 'img-03.jpg',
    isFeatured: true,
  },

  
];

 function HomePage() {
  
  return (
  
        <div >
            
           <Layout />
           <Content/>
           <FeaturedMenu menu = {DUMMY_ITEMS}/>
           {/* <Image src='/images/gallery-img.jpg' width={128} height={77} /> */}
             {/* <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1> */}

        </div>
      );
}
export default HomePage;
