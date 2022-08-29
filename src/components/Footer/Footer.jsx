import s from './Footer.module.scss';

export default function Footer() {
	return (
		<footer className={s.footer}>
			<div>
				<p>Política de Cookies</p>
				<p>Política de Privacidad</p>
				<p>Términos y condiciones de uso</p>
				<p>Cláusula Informativa de Consentimiento</p>
			</div>
				<div className={s.logoFooter}></div>
				<p className={s.copyright}>MejorconSalud is a property of Grupo MContigo © 2012 – 2020. All rights reserved.
Los contenidos de esta publicación se redactan solo con fines informativos. En ningún momento pueden servir para facilitar diagnósticos o sustituir la labor de un profesional. Le recomendamos que contacte con su especialista de confianza.</p>
			
		</footer>
	)
}