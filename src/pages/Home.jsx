import AboutSection from "../components/home/aboutSection";
import VideoSection from "../components/home/videoSection";

const Home = () => {
	return (
		<main className="min-h-screen overflow-hidden">
			<VideoSection />
			<AboutSection />
		</main>
	);
};

export default Home;
