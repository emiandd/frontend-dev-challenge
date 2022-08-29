import s from './NavBar.module.scss';
import { ReactComponent as SearchIcon } from '../../assets/icons/search-icon.svg'

export default function NavBar({ modalState, setModalState }) {

	const openMenu = () => {
		setModalState(true);
	}

	return (
		<nav className={s.nav}>
			<a href="/"><div className={s.nav__logo}></div></a>
			<form className={s.nav__input} action="">
				<input type="text" placeholder="Buscar..." /><button><SearchIcon /></button>
			</form>
			<div className={s.nav__burgerMenu} onClick={openMenu}></div>
		</nav>
	)
}