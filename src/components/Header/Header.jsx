import { useState } from 'react';
import NavBar from '../NavBar/NavBar.jsx';
import HeroSlider from '../HeroSlider/HeroSlider.jsx';
import './Header.module.scss';

export default function Header({ modalState, setModalState }) {


	const sliderImages = [
	  'https://i.postimg.cc/fyDyHGSR/hero-slide1.png',
	  'https://i.postimg.cc/g28KJkxT/hero-slide2.png',
	  'https://i.postimg.cc/9fgsgZ4R/hero-slide3.png',
	  'https://i.postimg.cc/1XhCbHyt/hero-slide4.png',
	  'https://i.postimg.cc/PfSv3qKG/hero-slide5.png'
	]

	return (
		<header>
			<NavBar modalState={modalState} setModalState={setModalState} />
			<HeroSlider slides={sliderImages} autoPlay={3} />
		</header>
	)
}