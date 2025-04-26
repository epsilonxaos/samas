import IMGBannerMid from '@assets/img/home/banner-mid.png'
import IMGBanner from '@assets/img/home/banner-principal.jpg'
import IMGBannerVideo from '@assets/img/home/banner-video2.jpg'
import SVGIsotipo from '@assets/img/isotipo_white.svg'
import VideoSeccion from '@assets/videos/dummy.mp4'
import Banner from '@components/Banner'
import LaSaladitaComponent from '@components/LaSaladitaComponent'
import Mapa from '@components/Mapa'
import Text from '@components/Text'
import { VideoModal } from '@components/VideoModal'
import About from '@pages/home/About'
import Experiencias from '@pages/home/Experiencias'
import LaSal from '@pages/home/LaSal'

const Index = () => {
	return (
		<>
			<Banner
				cover={IMGBanner}
				includeRestHeader={true}>
				<img
					className='absolute bottom-[150px] left-1/2 size-11 -translate-x-1/2'
					loading='lazy'
					src={SVGIsotipo}
					alt='Isotipo'
				/>
			</Banner>
			<About />
			<LaSal />
			<LaSaladitaComponent>
				<Text className='mb-0'>
					La Saladita es uno de esos lugares donde el tiempo se estira con el sol. Conocida por sus olas largas y
					constantes, es un paraíso para surfistas de alma ligera. Más que una playa, es una comunidad costera donde la
					vida fluye despacio: caminar entre palmas, comprar fruta en un mercado local, ver caer la tarde desde una
					tabla o una hamaca.
				</Text>
				<Text className='mb-0'>Naturaleza virgen, paz esencial y el rumor del mar.</Text>
				<Text>Eso es La Saladita.</Text>
			</LaSaladitaComponent>
			<Banner
				cover={IMGBannerMid}
				className='h-[550px]'
			/>
			<Experiencias />
			<VideoModal
				cover={IMGBannerVideo}
				videoSrc={VideoSeccion}
			/>
			<Mapa />
		</>
	)
}

export default Index
