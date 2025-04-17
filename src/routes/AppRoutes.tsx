import Index from '@pages/home/Index'

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
					path='*'
					element={<div>404: No such page!</div>}
				/>
			</Routes>
		</main>
	)
}

export default AppRoutes
