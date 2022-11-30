import { useRef, useState } from 'react';
import { CTA } from './CTA';
import heroImg from './assets/heroImg.jpeg';
import { Icon } from '@iconify/react';
export function Hero() {
	const [showVideo, setShowVideo] = useState(false);
	const demoVideo = useRef<HTMLIFrameElement>(null);
	return (
		<section id='hero'>
			{/* <div
				className='video-banner'
				onClick={() => {
					setShowVideo(!showVideo);
				}}
			></div> */}
			<div className='video-banner'>
				<img
					src={heroImg}
					alt=''
					onClick={() => {
						setShowVideo(!showVideo);
					}}
				/>
				<Icon
					icon='material-symbols:play-circle-outline-rounded'
					width={64}
					color={'#fff'}
					className='video-play-button'
				></Icon>
			</div>
			{showVideo ? (
				<div
					className={`video`}
					onClick={() => {
						setShowVideo(!showVideo);
					}}
				>
					<iframe
						id='demo-video'
						ref={demoVideo}
						src='https://www.youtube.com/embed/S15FVwbHEqo'
						title='YouTube video player'
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowFullScreen
					></iframe>
				</div>
			) : (
				''
			)}

			<div className='hero-main'>
				<div className='hero--text'>
					<h1>Vaš asistent u uzdržavanju kućnih ljubimaca</h1>
					<p className='hero--paragraph'>
						Rezervirajte pouzdane šetače i čuvare pasa.
					</p>
				</div>
				{CTA()}
			</div>
		</section>
	);
}
