import s from './HorizontalCard.module.scss';

export default function HorizontalCard({ img, category, title, description }) {
	return (
		<div className={s.card}>
			<div className={s.card__leftColor}></div>
			<div className={s.card__img}>
				<img src={img} alt="" />
			</div>
			<div className={s.card__description}>
				<h6>{category}</h6>
				<h5>{title}</h5>
				<p>{description}</p>
			</div>
		</div>
	)
}