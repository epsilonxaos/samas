import IMGBanner from '@assets/img/dummy.jpg'
import VideoSeccion from '@assets/videos/dummy.mp4'
import Banner from '@components/Banner'
import LaSaladitaComponent from '@components/LaSaladitaComponent'
import { VideoModal } from '@components/VideoModal'
import ExperienceGallery from '@pages/experiences/ExperienceGallery'
import Info from '@pages/experiences/Info'
import Gallery from '@pages/saladita/Gallery'

const LaSaladita = () => {
	return (
		<>
			<Banner
				cover={IMGBanner}
				includeRestHeader={true}
			/>

			<Info />
			<Gallery />
			<LaSaladitaComponent />
			<div className='pt-16'></div>
			<VideoModal
				cover={IMGBanner}
				videoSrc={VideoSeccion}
			/>
		</>
	)
}

export default LaSaladita
