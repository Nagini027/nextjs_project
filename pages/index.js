import Layout from '@/components/layout/layout';
import Slider from '@/components/slider/slider';
import Head from 'next/head'
import Image from 'next/image';
 function HomePage() {
  return (
  
      
        <div >
           <Layout />
           <Slider />
           {/* <Image src='/images/gallery-img.jpg' width={128} height={77} /> */}
             <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>

        </div>
      );
}
export default HomePage;
