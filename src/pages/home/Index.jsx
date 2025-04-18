import IMGBanner from '@assets/img/dummy.jpg'
import SVGIsotipo from '@assets/img/isotipo_white.svg'
import Banner from '@components/Banner'
import LaSaladitaComponent from '@components/LaSaladitaComponent'
import About from '@pages/home/About'
import LaSal from '@pages/home/LaSal'

const Index = () => {
	return (
		<>
			<Banner
				cover={IMGBanner}
				includeRestHeader={true}>
				<img
					className='absolute bottom-[150px] left-1/2 size-11 -translate-x-1/2 invert'
					loading='lazy'
					src={SVGIsotipo}
					alt='Isotipo'
				/>
			</Banner>
			<About />
			<LaSal />
			<LaSaladitaComponent />
			<Banner
				cover={IMGBanner}
				className='h-[550px]'
			/>
		</>
	)
}

export default Index
