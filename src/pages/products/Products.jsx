import IMGBanner from '@assets/img/dummy.jpg'
import Banner from '@components/Banner'
import Info from '@pages/products/Info'
import ListProducts from '@pages/products/ListProducts'

const Products = () => {
	return (
		<>
			<Banner
				cover={IMGBanner}
				includeRestHeader={true}
			/>

			<Info />
			<ListProducts />
		</>
	)
}

export default Products
