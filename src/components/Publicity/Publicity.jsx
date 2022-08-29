import s from './Publicity.module.scss';

export default function Publicity() {
	return (
		<div className={s.publicity}>
			<img src={require("../../assets/img/publicity-mobile.png")} alt="publicity" />
		</div>
	)
}