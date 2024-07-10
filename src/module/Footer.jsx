import isotipo from "../assets/img/isotipo.gif";

export const Footer = () => {
	return (
		<footer className="pb-[80px] md:pb-[50px] bg-footer md:pt-[100px] relative z-[1]">
			<div className="max-w-app px-4 mx-auto text-center mb-[250px] md:mb-[360px]">
				<img src={isotipo} alt="Samas" className="w-[250px] mx-auto" />
				<h3 className="uppercase leading-[30px] tracking-[4.5px] max-w-[280px] md:max-w-[510px] mx-auto text-base md:text-lg xl:text-2xl mb-8">Encuentra el refugio perfecto para ti</h3>

				<ul className="md:flex md:items-center md:justify-center md:gap-[130px] mb-8 text-xs md:text-sm lg:text-base">
					<li className="mb-10 md:mb-0">
						<a href="tel:+529992174465">(999) 217 4465</a>
					</li>
					<li className="mb-10 md:mb-0">
						<a href="mailto:contacto@lasal.mx" className="underline">
							contacto@lasal.mx
						</a>
					</li>
					<li>
						<a href="http://" target="_blank" rel="noopener noreferrer">
							@Lasal.Samas
						</a>
					</li>
				</ul>

				<p className="uppercase text-xs">próximamente</p>
			</div>

			<div className="max-w-app mx-auto grid grid-cols-1 md:grid-cols-3 px-4 text-[10px] md:text-xs relative top-8 md:top-0">
				<p className="col-span-1 hidden md:block">SAMAS.MX</p>
				<p className="col-span-1 mb-2 md:mb-0 text-center">
					<a href="http://" target="_blank" rel="noopener noreferrer">
						Desarrollado por MADEBYPARTNERS
					</a>
				</p>
				<p className="col-span-1 text-center md:text-right">
					<a href="">Politicas de privacidad</a>
				</p>
			</div>
		</footer>
	);
};
