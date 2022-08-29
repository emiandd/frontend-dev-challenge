import s from './DesktopPublicity.module.scss';

export default function DesktopPublicity() {
	return (
		<div className={s.desktop_publicity}>
			<img src={require("../../assets/img/publicity-desktop.png")} alt="publicity" />
		</div>
	)
}