import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import s from './Testimonial.module.scss';

export default function Testimonial() {
	return (
		<>
		<h2 className={s.testimonialTitle}>Testimonios</h2>
		<Carousel
	        showArrows={true}
	        infiniteLoop={true}
	        showThumbs={false}
	        showStatus={false}
	        autoPlay={true}
	        interval={6100}
        >
	        <div className={s.testimonial}>

	          <div className={s.myCarousel}>
	          <div className={s.quoteIcon}>
		          <img src="https://svgshare.com/i/mBL.svg" alt="quote" />
	          </div>
	            <p>
	              Me gustaría agradecer al sitio, me ayudó de una manera inimaginable,  el psicólogo fue sumamente servicial y acogedor conmigo  y me siento mejor conmigo mismo.
	            </p>
	            <h5> ~ Shirley Fultz  ~</h5>
	          </div>
	        </div>

	        <div className={s.testimonial}>
	          <div className={s.myCarousel}>
	          <div className={s.quoteIcon}>
		          <img src="https://svgshare.com/i/mBL.svg" alt="quote" />
	          </div>
	            <p>
	              Me gustaría agradecer al sitio, me ayudó de una manera inimaginable,  el psicólogo fue sumamente servicial y acogedor conmigo  y me siento mejor conmigo mismo.
	            </p>
	            <h5> ~ Daniel Keystone ~ </h5>
	          </div>
	        </div>

	        <div className={s.testimonial}>
	          <div className={s.myCarousel}>
	          <div className={s.quoteIcon}>
		          <img src="https://svgshare.com/i/mBL.svg" alt="quote" />
	          </div>
	            <p>
	              Me gustaría agradecer al sitio, me ayudó de una manera inimaginable,  el psicólogo fue sumamente servicial y acogedor conmigo  y me siento mejor conmigo mismo.
	            </p>
	            <h5> ~ Theo Sorel ~ </h5>
	          </div>
	        </div>
      	</Carousel>
      	</>
	)
}