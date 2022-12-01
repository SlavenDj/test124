import setnjeImg from './assets/setnje.png';
import cuvanjeImg from './assets/cuvanje.png';
import njegaImg from './assets/njega.png';
import setnjeImgDesktop from './assets/setnjaDesktop.png';
import cuvanjeImgDesktop from './assets/cuvanjeDesktop.png';
import njegaImgDesktop from './assets/njegaDesktop.png';
import { Service } from './Service';

export function Services() {
	return (
		<div className='services' id='usluge'>
			<h2 className='services--title'>Usluge</h2>

			<Service
				img={setnjeImg}
				desktopImg={setnjeImgDesktop}
				title={'Šetnje'}
				indexs='1'
				desc={
					'Tokom užurbanog dana ili kada Vam je potrebno opuštanje, uvijek možete brzo zakazati šetnju. Vaš pas vježba i troši energiju dok šeta u već poznatom komšiluku.'
				}
			></Service>
			<Service
				img={cuvanjeImg}
				desktopImg={cuvanjeImgDesktop}
				title={'Čuvanje ljubimaca'}
				indexs='2'
				desc={
					'Pronađite čuvara koji će odgovarati potrebama Vašeg psa i posvetiti mu svu moguću pažnju. Dok ste na odmoru, poslovnom putu, posjeti obitelji ili prijateljima, pas će dobiti svu potrebnu njegu i ljubav.'
				}
			></Service>
			<Service
				img={njegaImg}
				desktopImg={njegaImgDesktop}
				title={'Dnevna njega'}
				indexs='3'
				desc={
					'Nema više stresa za Vas i Vašeg psa dok ste na poslu. Ostavite psa ujutru kod čuvara u blizini i preuzmite ga sretnog i zadovoljnog navečer.'
				}
			></Service>
		</div>
	);
}
