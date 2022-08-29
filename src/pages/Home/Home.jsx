import { useState } from 'react';
import s from './Home.module.scss';
import Header from '../../components/Header/Header.jsx';
import ModalMenu from '../../components/ModalMenu/ModalMenu.jsx';
import PopularArticles from '../../sections/PopularArticles/PopularArticles.jsx';
import Testimonial from '../../sections/Testimonial/Testimonial.jsx';
import Faqs from '../../sections/Faqs/Faqs.jsx';
import Footer from '../../components/Footer/Footer.jsx';

export default function Home() {

	const [ modalState, setModalState ] = useState(false);

	return (
		<div className={s.homeContainer}>
			<Header modalState={modalState} setModalState={setModalState} />
			<ModalMenu modalState={modalState} setModalState={setModalState} />
			<PopularArticles />
			<Testimonial />
			<Faqs />
			<Footer />
		</div>
	)
}