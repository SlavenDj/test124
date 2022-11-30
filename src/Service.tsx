import { CTA } from './CTA';
export function Service(prop: any) {
	return (
		<div className='service' data-aos='fade-up'>
			<picture>
				<source media='(min-width: 768px)' srcSet={prop.desktopImg} />
				<img src={prop.img} alt='' />
			</picture>
			<div className='service--main'>
				<h3
					className='service--main--title'
					id={'title-' + prop.indexs}
				>
					{prop.title}
				</h3>
				<div className='service--main--desc'>{prop.desc}</div>
				<CTA></CTA>
			</div>
		</div>
	);
}
