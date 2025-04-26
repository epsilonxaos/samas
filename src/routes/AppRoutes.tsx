import Experiences from '@pages/experiences/Experiences'
import Gastronomy from '@pages/gastronomy/Gastronomy'
import Index from '@pages/home/Index'
import Products from '@pages/products/Products'
import Rooms from '@pages/rooms/Rooms'
import LaSaladita from '@pages/saladita/LaSaladita'

import { Route, Routes, useLocation } from 'react-router-dom'

const AppRoutes = () => {
	const location = useLocation()

	return (
		<main>
			<Routes
				location={location}
				key={location.pathname}>
				<Route
					path='/'
					element={<Index />}
				/>
				<Route
					path='/rooms'
					element={<Rooms />}
				/>
				<Route
					path='/experiences'
					element={<Experiences />}
				/>
				<Route
					path='/la-saladita'
					element={<LaSaladita />}
				/>
				<Route
					path='/gastronomy'
					element={<Gastronomy />}
				/>
				<Route
					path='/products'
					element={<Products />}
				/>
				<Route
					path='*'
					element={<div>404: No such page!</div>}
				/>
			</Routes>
		</main>
	)
}

export default AppRoutes
