import IMGBanner from '@assets/img/restaurante/banner.jpg'
import Banner from '@components/Banner'
import Button from '@components/Button'
import Gallery from '@pages/gastronomy/Gallery'
import Info from '@pages/gastronomy/Info'

const Gastronomy = () => {
	return (
		<>
			<Banner
				cover={IMGBanner}
				includeRestHeader={true}>
				<div className='absolute bottom-12 left-0 w-full'>
					<Button.Url className='mx-auto block w-[140px] bg-white text-center text-black hover:bg-black hover:text-white'>
						MENÚ
					</Button.Url>
				</div>
			</Banner>

			<Info />
			<Gallery />
		</>
	)
}

export default Gastronomy
