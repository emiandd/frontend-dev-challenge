import { useState, useEffect, useRef } from 'react';
import { css } from '@emotion/react';
import SliderContent from './SliderContent.jsx';
import Slide from './Slide/Slide.jsx';

const screenWidth = window.innerWidth;

export default function HeroSlider(props) {

  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45
  })

  const { translate, transition, activeIndex } = state;
  const autoPlayRef = useRef();

  useEffect(() => {
  	autoPlayRef.current = nextSlide;
  })

  useEffect(() => {
  	const play = () => {
  		autoPlayRef.current()
  	}
  	const interval = setInterval(play, props.autoPlay * 1000)	
  }, [])

  const nextSlide = () => {
    if (activeIndex === props.slides.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0
      })
    }

    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * screenWidth
    })
  }

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (props.slides.length - 1) * screenWidth,
        activeIndex: props.slides.length - 1
      })
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * screenWidth
    })
  }
  
  return (
    <div css={SliderCSS}>
      <SliderContent
        translate={translate}
        transition={transition}
        width={screenWidth * props.slides.length}
      >
        {props.slides.map((slide, i) => (
          <Slide key={slide + i} content={slide} />
        ))}
      </SliderContent>
    </div>
  )
}

HeroSlider.defaultProps = {
	slides: [],
	autoPlay: null
}

const SliderCSS = css`
  position: relative;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
`
