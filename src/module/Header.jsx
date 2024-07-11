import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import logo from "../assets/img/logo.svg";
import { V_FROM_TOP_TO_ORIGIN } from "../constants/constants";

export const Header = () => {
	const ref = useRef(null);

	const isInView = useInView(ref, { once: true });

	return (
		<motion.header ref={ref} variants={V_FROM_TOP_TO_ORIGIN} initial={"initial"} animate={isInView ? "show" : ""} className="relative py-4">
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
		</motion.header>
	);
};
