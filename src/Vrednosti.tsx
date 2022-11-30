import humanFeedsDog from './assets/human-feeding-dog.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
	duration: 1500,
	anchorPlacement: 'top-center',
});

export function Vrednosti(
	naseVrednosti: { icon: string; title: string; description: string }[]
) {
	return (
		<div id='vrednosti'>
			<h2>Naše vrijednosti</h2>
			<div className='vrijednosti--content'>
				<img
					src={humanFeedsDog}
					alt=''
					id='feeding-dog-img'
					data-aos='fade-up'
				/>

				<div id='vrednosti--grid'>
					{naseVrednosti.map((vrednost, index) => (
						<div
							className='vrednost'
							key={index}
							data-aos='fade-up'
						>
							<span className='material-icons-round'>
								{vrednost.icon}
							</span>
							<div className='vrednost--title'>
								{vrednost.title}
							</div>
							<div>{vrednost.description}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
