import App from '@App'
import '@assets/fonts/fontSamas.css'
import '@css/index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route
					path='/*'
					element={<App />}
				/>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
)
