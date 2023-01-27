import classes from './content.module.css';
import Image from 'next/image';
function Content(){

    return(
        <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/img-05.jpg'
          alt='An image showing Max'
          width={300}
          height={300}
        />
      </div>
     
    </section>
    );
}
export default Content;