import s from './QuestionAnswer.module.scss';
import { ReactComponent as FaqsArrow } from '../../../assets/icons/faqs-arrow.svg';
import { useState } from 'react';

export default function QuestionAnswer() {

	const [ showA, setShowA ] = useState(false)

	const showAnswer = () => {
		if(!showA){
			setShowA(true)
		}else{
			setShowA(false)
		}
	}

	return (
		<div className={s.container}>
			<div className={s.container__questionAnswer} onClick={showAnswer}>
				<h4>¿Ut enim ad minim veniam quis nostrud?</h4>
				<p className={ showA ? s.container__answer : s.hidden}>Maecenas pharetra convallis posuere morbi leo urna molestie at elementum. Duis tristique sollicitudin nibh sit amet commodo nulla. Sodales neque sodales ut etiam sit amet nisl. Quis commodo odio aenean sed adipiscing diam donec adipiscing tristique.</p>
			</div>
			<div className={ !showA ? s.container__arrow : s.container__arrowUp}>
				<FaqsArrow onClick={showAnswer} />
			</div>
		</div>
	)
}