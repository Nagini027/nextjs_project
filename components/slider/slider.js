import Head from 'next/head';
import Image from 'next/image';
import classes from './slider.module.css';
function Slider(){

    
    return (
        <div>
            <Head>
                <title>Nextjs</title>
                <link rel ="stylesheet"
                href = "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"></link>
            </Head>
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      {/* <Image src="..." class="d-block w-100" alt="..." /> */}
      <Image src='/images/gallery-img.jpg' width={100} height={500}
  
  class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      {/* <Image src="..." class="d-block w-100" alt="..." /> */}
      <Image src='/images/gallery-img.jpg' width={128} height={500}
  
  class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
       <Image src='/images/gallery-img.jpg' width={128} height={500}
  
      class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<body>
  
</body>
        </div>
        
    
  
    );

}
export default Slider;