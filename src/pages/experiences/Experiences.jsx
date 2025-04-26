import IMGBanner from '@assets/img/experiencias/banner.jpg'
import IMGCoverVideo from '@assets/img/experiencias/cover-video.jpg'
import VideoSeccion from '@assets/videos/dummy.mp4'
import Banner from '@components/Banner'
import LaSaladitaComponent from '@components/LaSaladitaComponent'
import Text from '@components/Text'
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
				cover={IMGCoverVideo}
				videoSrc={VideoSeccion}
			/>
			<div className='pt-16'></div>
			<LaSaladitaComponent>
				<Text>
					Ubicada en la costa del Pacífico mexicano, La Saladita es un rincón donde el tiempo se desliza al ritmo de las
					olas. <br />
					Famosa por su ola larga y noble, es el paraíso de surfistas que buscan conexión auténtica más que espectáculo.
					Pero este lugar va más allá del surf: es huellas descalzas en la arena, fruta recién cortada en el mercado
					local, atardeceres que se alargan sin prisa. <br />
					Es una comunidad viva, sencilla, que resiste al turismo masivo con una belleza que no se grita, pero que
					permanece.
				</Text>
			</LaSaladitaComponent>
			<ExperienceGallery />
		</>
	)
}

export default Experiences
