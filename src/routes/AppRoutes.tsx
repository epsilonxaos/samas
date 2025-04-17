import Index from '@pages/home/Index'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

const AppRoutes = () => {
	return (
		<Router>
			<main>
				<Routes>
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
		</Router>
	)
}

export default AppRoutes
