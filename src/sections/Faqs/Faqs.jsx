import s from './Faqs.module.scss';
import { ReactComponent as FaqsImg } from '../../assets/img/faqs-image.svg';
import QuestionAnswer from './QuestionAnswer/QuestionAnswer.jsx';

export default function Faqs() {
	return (
		<>
		<h2>Preguntas Frecuentes</h2>
		<div className={s.faqs__container}>
			<div className={s.faqs__img}>
				<FaqsImg />
			</div>
			<div>
				<QuestionAnswer />
				<QuestionAnswer />
				<QuestionAnswer />
				<QuestionAnswer />
				<QuestionAnswer />
				<QuestionAnswer />
			</div>
		</div>
		</>
	)
}