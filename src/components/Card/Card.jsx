import s from './Card.module.scss';

export default function Card({ img, category, title, description }) {
	return (
		<div className={s.card}>
			<div className={s.card__topColor}></div>
			<div>
				<img src={img} alt="" />
			</div>
			<div className={s.card__bottom}>
				<h6>{category}</h6>
				<h5>{title}</h5>
				<p>{description}</p>
			</div>

		</div>
	)
}