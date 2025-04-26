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
				Ubicada en la costa del Pacífico mexicano, La Saladita es un rincón donde el tiempo se desliza al ritmo de las
				olas.
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
