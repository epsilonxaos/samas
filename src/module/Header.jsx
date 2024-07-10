import logo from "../assets/img/logo.svg";

export const Header = () => {
	return (
		<header className="relative py-4">
			<div className="max-w-app mx-auto px-4">
				<picture className="absolute w-[137px] top-1/2 left-4 md:left-1/2 md:-translate-x-1/2 -translate-y-1/2">
					<img src={logo} alt="Samas" />
				</picture>

				<ul className="flex gap-8 ml-auto mr-0 max-w-max">
					<li>
						<button>ES</button>
						<span className="inline-block px-2">/</span>
						<button>EN</button>
					</li>
					<li className="hidden md:block">
						<p>PRÓXIMAMENTE</p>
					</li>
				</ul>
			</div>
		</header>
	);
};
