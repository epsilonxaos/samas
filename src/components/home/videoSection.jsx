import gifPrincipal from "../../assets/img/gif-principal.gif";

const VideoSection = () => {
	return (
		<section>
			<picture className="">
				<img src={gifPrincipal} className="w-full min-h-[550px] object-cover max-h-[calc(100svh-56px)]" alt="Samas principal" />
			</picture>
		</section>
	);
};

export default VideoSection;
