import IMGBanner from '@assets/img/dummy.jpg'
import Banner from '@components/Banner'
import Gallery from '@pages/gastronomy/Gallery'
import Info from '@pages/gastronomy/Info'

const Gastronomy = () => {
	return (
		<>
			<Banner
				cover={IMGBanner}
				includeRestHeader={true}
			/>

			<Info />
			<Gallery />
		</>
	)
}

export default Gastronomy
