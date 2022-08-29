import s from './PopularArticles.module.scss';
import Card from '../../components/Card/Card.jsx';
import Publicity from '../../components/Publicity/Publicity.jsx';
import DesktopPublicity from '../../components/DesktopPublicity/DesktopPublicity.jsx';
import ArticleMedium from '../../components/ArticleMedium/ArticleMedium.jsx';
import HorizontalCard from '../../components/HorizontalCard/HorizontalCard.jsx';

export default function PopularArticles() {

	const articles = [
		{
			img: 'https://i.postimg.cc/P5j3N4jg/pareja-caricias.png',
			category: 'Lorem Ipsum',
			title: 'Nunc id cursus metus aliquam eleifend mi in nulla posuere',
			description: 'Nunc mattis enim ut tellus elementum sagittis. At in tellus integer feugiat.'
		},
		{
			img: 'https://i.postimg.cc/KYVscyvN/blur-bubbles-cleaning-close-up.png',
			category: 'Lorem Ipsum',
			title: 'Nunc id cursus metus aliquam eleifend mi in nulla posuere',
			description: 'Nunc mattis enim ut tellus elementum sagittis. At in tellus integer feugiat.'
		},
		{
			img: 'https://i.postimg.cc/bvG3BFH2/plan-alimentacion.png',
			category: 'Lorem Ipsum',
			title: 'Nunc id cursus metus aliquam eleifend mi in nulla posuere',
			description: 'Nunc mattis enim ut tellus elementum sagittis. At in tellus integer feugiat.'
		}
	]

	return (
		<>
			<h2 className={s.sectionTitle}>Artículos Populares</h2>
			<div className={s.popularArticles}>
				{articles && articles.map( (a, i) => (
					<Card key={i} img={a.img} category={a.category} title={a.title} description={a.description}  />
				))}
				<Publicity />
				<ArticleMedium />
				<div className={s.popularArticles__horizontalCards}>
					{articles && articles.map( (a, i) => (
						<HorizontalCard key={i} img={a.img} category={a.category} title={a.title} description={a.description}  />
					))}
				</div>
			</div>
			<DesktopPublicity />
		</>
	)
}