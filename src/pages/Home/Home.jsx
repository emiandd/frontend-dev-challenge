import { useState } from 'react';
import Header from '../../components/Header/Header.jsx';
import ModalMenu from '../../components/ModalMenu/ModalMenu.jsx';

export default function Home() {

	const [ modalState, setModalState ] = useState(false);

	return (
		<>
			<Header modalState={modalState} setModalState={setModalState} />
			<ModalMenu modalState={modalState} setModalState={setModalState} />
		</>
	)
}