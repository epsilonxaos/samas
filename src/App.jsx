import { Route, Switch } from "wouter";
import { Footer } from "./module/Footer";
import { Header } from "./module/Header";
import Home from "./pages/Home";
import Politicas from "./pages/Politicas";
import useScrollToTop from "./hook/useScrollToTop";

function App() {
	useScrollToTop();

	return (
		<div className="overflow-hidden">
			<Header />

			<Switch>
				<Route path={"/"} component={Home} />
				<Route path={"/politicas-de-privacidad"} component={Politicas} />
				<Route>
					<section className="h-[300px] flex items-center justify-center">404: No such page!</section>
				</Route>
			</Switch>

			<div className="relative w-full">
				<div className="circulo-deco" />
			</div>
			<Footer />
		</div>
	);
}

export default App;
