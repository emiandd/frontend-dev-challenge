import s from './Category.module.scss';
import { ReactComponent as RightArrow } from '../../assets/icons/right-arrow-menu.svg';

export default function Category() {
	return (
		<div className={s.container}>
			<h4>Lorem Ipsum</h4>
			<p>Placerat orci nulla pellentesque<RightArrow /></p>
			<p>Viverra vitae congue eu consequat<RightArrow /></p>
			<p>Velit aliquet sagittis id consectetur<RightArrow /></p>
		</div>
	)
}