import IMGBanner from '@assets/img/lasaladita/banner.jpg'
import IMGCoverVideo from '@assets/img/lasaladita/cover-video.jpg'
import VideoSeccion from '@assets/videos/dummy.mp4'
import Banner from '@components/Banner'
import LaSaladitaComponent from '@components/LaSaladitaComponent'
import { VideoModal } from '@components/VideoModal'
import ExperienceGallery from '@pages/experiences/ExperienceGallery'
import Gallery from '@pages/saladita/Gallery'
import Info from '@pages/saladita/Info'

const LaSaladita = () => {
	return (
		<>
			<Banner
				cover={IMGBanner}
				includeRestHeader={true}
			/>

			<Info />
			<Gallery />
			<LaSaladitaComponent>
				LaSal Samas, donde el lujo está en lo esencial. <br />
				Un destino para quienes buscan mar, surf y silencio, sin renunciar a la belleza ni a la autenticidad
			</LaSaladitaComponent>
			<div className='pt-16'></div>
			<VideoModal
				cover={IMGCoverVideo}
				videoSrc={VideoSeccion}
			/>
		</>
	)
}

export default LaSaladita
