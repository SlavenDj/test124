import './App.css';
import { Header } from './Header';
import { Hero } from './Hero';
import { Vrednosti } from './Vrednosti';
import { Footer } from './Footer';
import { Services } from './Services';
import kakoRadi from './assets/kakoRadi.svg';
import kakoRadiDesktop from './assets/kakoRadiDesktop.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
	duration: 1500,
	anchorPlacement: 'center-center',
});
let statistika = [
	{
		number: '78%',
		desc: 'vlasnika pasa vjeruje da bi njihovi psi trebali imati najmanje dvije šetnje dnevno',
	},
	{
		number: '95.5%',
		desc: 'vlasnika pasa smatra svoje ljubimce članovima obitelji',
	},
	{
		number: '60%',
		desc: 'je postotak smanjenja usamljenosti i tjeskobe uz pomoć pasa',
	},
];

function App() {
	let naseVrednosti = [
		{
			icon: 'lock',
			title: 'Sigurnost',
			description:
				'Osiguranje za pse i šetače/čuvare u toku šetnji i čuvanaja. Prioritet nam je da se sve strane za vrijeme trajanja šetnje/čuvanja osjećaju sigurno.',
		},
		{
			icon: 'menu_book',
			title: 'Znanje',
			description:
				'Svi šetači i čuvar će morati proći i položiti obuku prije nego postanu dostupni na apliakciji kako bi osigurali da oni koji pružaju usluge su zaista kompetentni.',
		},
		{
			icon: 'verified_user',
			title: 'Provjerenost',
			description:
				'Svi šetači i čuvari će proći proces identifikacije i provjere prije nego što postanu dostupni na apliakciji. Želimo da kreiramo i gajimo odnose zasnovane na transparentnosti.',
		},
		{
			icon: 'emoji_emotions',
			title: 'Jednostavnost',
			description:
				'Brzo i efikasno ponalaženje usluga i korištenje apliakcije uz jednostavan i intuitivan korisnički interface.',
		},
	];
	return (
		<div className='App'>
			<Header />
			<Hero />
			<KakoRadi />
			{Vrednosti(naseVrednosti)}
			<Services />
			<div className='stats--container' id='statistike'>
				<div className='green-line'></div>
				<div className='stats--title'>
					Otkrijte svijet njege Vaših kućnih ljubimaca
				</div>
				<div className='stats-desc'>
					Psi su nevjerojatno društvena bića, pa se lako zaraze našom
					toplinom i radošću.
				</div>
				<div className='stats'>
					{statistika.map((data, index) => (
						<div className='stat' data-aos='fade-up'>
							<div className='percentage'>{data.number}</div>
							<div className='stat--desc'>{data.desc}</div>
						</div>
					))}
				</div>
				<div className='green-line'></div>
			</div>{' '}
			<Footer />
		</div>
	);
}
function KakoRadi() {
	return (
		<section className='kako-radi' id='kako'>
			<div className='kako-radi--text'>
				<h2>Kako Šapa aplikacija radi?</h2>
				<div>
					Mi služimo kao spona između vlasnika pasa i nezavisnih,
					provjerenih lokalnih šetača i čuvara pasa.{' '}
				</div>
			</div>
			<div>
				<picture>
					<source
						media='(min-width: 768px)'
						srcSet={kakoRadiDesktop}
					/>
					<img src={kakoRadi} alt='' data-aos='fade-up' />
				</picture>
			</div>
		</section>
	);
}
export default App;
