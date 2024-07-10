import icono from "../../assets/img/icono.svg";
import img_1 from "../../assets/img/1.png";
import img_2 from "../../assets/img/2.png";
import img_1m from "../../assets/img/1m.png";
import img_2m from "../../assets/img/2m.png";

const AboutSection = () => {
	return (
		<section className="py-12 md:py-16 lg:py-32 w-full">
			<div className="relative">
				<div className="serpiente-deco"></div>
				<div className="serpiente-deco-movil"></div>

				<div className="max-w-app mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 relative z-10">
						<div className="col-span-1">
							<div className="py-[60px] md:py-16 min-h-[200px] max-w-[250px] md:max-w-[425px] mx-auto md:mr-12 xl:mr-24 pl-4">
								<AboutTextMain />
							</div>

							{/* // * Movil */}
							<img src={img_1m} alt="Surf" className="w-[calc(100%-60px)] object-cover min-h-[400px] md:hidden" />
							{/* // * Escritorio */}
							<img src={img_2} alt="palmeras" className="w-full hidden md:block object-cover min-h-[600px] max-w-max ml-auto" />
						</div>

						<div className="col-span-1">
							{/* // ? Movil */}
							<img src={img_2m} alt="palmeras" className="w-[calc(100%-100px)] object-cover min-h-[280px] max-h-[300px] ml-auto md:hidden relative -top-[90px]" />
							{/* // ? Escritorio */}
							<img src={img_1} alt="Surf" className="w-full object-cover min-h-[450px] hidden md:block" />
							<div className="pb-11 md:py-16 max-w-[260px] md:max-w-[415px] max-md:mx-auto md:ml-12 xl:ml-24 pr-4">
								<AboutTextSecundary />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

const TextFormat = ({ children }) => {
	return <p className="uppercase text-xs md:text-sm xl:text-base text-center tracking-[1.8px] md:tracking-[2.4px]">{children}</p>;
};

const AboutTextMain = () => {
	return (
		<TextFormat>
			<span className="block mb-8">Somos un proyecto de sol, consciente con el medio ambiente y la comunidad que nos rodea</span>
			<span className="block">Un secreto en el trópico</span>
		</TextFormat>
	);
};

const AboutTextSecundary = () => {
	return (
		<TextFormat>
			<img src={icono} width="35px" alt="Icono en rayas" className="mx-auto mb-11" />
			<span className="block mb-8">Un espacio revitalizante, sustentable, regenerativo y de bienestar</span>
			<span className="block mb-8">Un lugar de desconexión y reconexión</span>
			<span className="block">Un culto al sol, a la vida, al arte y a la aventura.</span>
		</TextFormat>
	);
};

export default AboutSection;
