import IMGBanner from '@assets/img/dummy.jpg'
import VideoSeccion from '@assets/videos/dummy.mp4'
import Banner from '@components/Banner'
import LaSaladitaComponent from '@components/LaSaladitaComponent'
import { VideoModal } from '@components/VideoModal'
import ExperienceGallery from '@pages/experiences/ExperienceGallery'
import Info from '@pages/experiences/Info'

const Experiences = () => {
	return (
		<>
			<Banner
				cover={IMGBanner}
				includeRestHeader={true}
			/>

			<Info />
			<VideoModal
				cover={IMGBanner}
				videoSrc={VideoSeccion}
			/>
			<div className='pt-16'></div>
			<LaSaladitaComponent />
			<ExperienceGallery />
		</>
	)
}

export default Experiences
