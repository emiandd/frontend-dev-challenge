import s from './ArticleMedium.module.scss';

export default function ArticleMedium() {
	return (
		<div className={s.articleMedium}>
			<div className={s.articleMedium__img}>
				<img src={require("../../assets/img/article-medium.png")} alt="" />
			</div>
			<div className={s.articleMedium__legend}>
				<p>Lorem ipsum dolor sit amet. Aquí entrará una leyenda en la foto</p>
			</div>
		</div>
	)
}