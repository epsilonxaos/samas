import { Footer } from "./module/Footer";
import { Header } from "./module/Header";
import Home from "./pages/Home";

function App() {
	return (
		<div className="overflow-hidden">
			<Header />

			<Home />
			<div className="relative w-full">
				<div className="circulo-deco"></div>
			</div>
			<Footer />
		</div>
	);
}

export default App;
