import dogFooterCircle from './assets/circle-dog.png';
import dogFooterDesktop from './assets/dogFooter.png';
import { Icon } from '@iconify/react';
import { useState } from 'react';
export function Footer() {
	const [showCredits, setShowCredits] = useState(false);
	return (
		<footer id='konakt'>
			<div className='footer--content'>
				<picture>
					<source
						media='(min-width: 768px)'
						srcSet={dogFooterDesktop}
					/>
					<img src={dogFooterCircle} alt='' />
					{/* <source
						media='(max-width: 768px)'
						srcSet={dogFooterCircle}
					/> */}
				</picture>
				<div className='footer--text'>
					<a
						href='https://docs.google.com/forms/d/e/1FAIpQLSeMcYNE23JtMPh9Kmi2utzQN7DujfugPUM725TWTpvYBWb3Qg/viewform'
						className='hero-btn'
					>
						<button className='call-to-action'>
							Dodaj me na listu čekanja
						</button>
					</a>
					<div className='footer--info'>
						<div className='footer--more'>
							<div className='footer--title'>Zapratite nas</div>
							<div className='links'>
								<a href='https://www.instagram.com/app_sapa'>
									<Icon
										icon='mdi:instagram'
										width='32px'
									></Icon>
								</a>
								<a href='https://www.facebook.com/profile.php?id=100088280409469&is_tour_dismissed=true '>
									<Icon
										icon='mdi:facebook'
										width='32px'
									></Icon>
								</a>
								<a href='https://www.youtube.com/@sapa.aplikacija'>
									<Icon
										icon='mdi:youtube'
										width='32px'
									></Icon>
								</a>
								<a href='https://twitter.com/sapa_app'>
									<Icon
										icon='mdi:twitter'
										width='32px'
									></Icon>
								</a>
								<a href='https://www.tiktok.com/@sapa.app?is_from_webapp=1&sender_device=pc'>
									<Icon
										icon='ic:round-tiktok'
										width='32px'
									></Icon>
								</a>
								<a href='https://www.linkedin.com/company/89838863/admin/'>
									<Icon
										icon='mdi:linkedin'
										width='32px'
									></Icon>
								</a>
							</div>
						</div>
						<div className='footer--more'>
							<div className='footer--title'>E-pošta</div>
							<a href='mailto:sapa.aplikacija@gmail.com'>
								sapa.aplikacija@gmail.com
							</a>
						</div>
						<div className='footer--more'>
							<div
								onClick={() => {
									setShowCredits(true);
								}}
							>
								Credits
							</div>
						</div>
						{showCredits && (
							<div className='credits' id='credits-pop-up'>
								<div>
									<a href='https://www.freepik.com/free-vector/dog-owner-color-set_26762035.htm#query=isometric%20dog%20walking&position=0&from_view=search&track=ais'>
										Image by macrovector
									</a>{' '}
									on Freepik
								</div>
								<button
									onClick={() => {
										setShowCredits(false);
									}}
									className='close-credits'
								>
									Zatvori
								</button>
							</div>
						)}
						<div className='copyright'>Copyright 2022 Šapa</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
