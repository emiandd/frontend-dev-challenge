import s from './ModalMenu.module.scss';
import { ReactComponent as LogoMenuIcon } from '../../assets/icons/logo-menu-icon.svg';
import { ReactComponent as CloseMenuIcon } from '../../assets/icons/close-menu-icon.svg';
import Category from './Category.jsx';

export default function ModalMenu({ modalState, setModalState }) {

	const closeMenu = () => {
		setModalState(false);
	}

	return (
		<div className={modalState ? s.modalMenuActive : s.modalMenuInactive}>
			<div className={s.modalMenuActive__menu}>
				<div className={s.modalMenuActive__top}>
					<LogoMenuIcon />
					<div className={s.modalMenuActive__closeMenuIcon} onClick={closeMenu}>
					</div>
				</div>
				<div className={s.modalMenuAtive__categories}>
					<Category />
					<Category />
					<Category />
					<Category />
				</div>
			</div>
			
		</div>
	)
}