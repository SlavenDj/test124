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
	anchorPlacement: 'top-center',
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
			description: 'Osiguranje za pse u tijeku šetnje',
		},
		{
			icon: 'menu_book',
			title: 'Znanje',
			description: 'Svi šetači ce proći obuku',
		},
		{
			icon: 'verified_user',
			title: 'Provjerenost',
			description:
				'Svi korisnici aplikacije imaju ID verifikaciju i provjeru pouzdanosti',
		},
		{
			icon: 'emoji_emotions',
			title: 'Jednostavnost',
			description: 'Brzo i efikasno ponalaženje usluga',
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
