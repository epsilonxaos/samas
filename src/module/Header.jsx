import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import logo from "../assets/img/logo.svg";
import { V_FROM_TOP_TO_ORIGIN } from "../constants/constants";
import { useTranslation } from "react-i18next";

export const Header = () => {
	const { t } = useTranslation();
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
						<Language />
					</li>
					<li className="hidden md:block">
						<p>{t("comingSoon")}</p>
					</li>
				</ul>
			</div>
		</motion.header>
	);
};

const Language = () => {
	const { i18n } = useTranslation();

	return (
		<>
			<button type="button" onClick={() => i18n.changeLanguage("es")} className={i18n.language == "es" ? "font-bold" : "cursor-pointer opacity-30 hover:opacity-100"}>
				ES
			</button>
			<span className="inline-block px-2">/</span>
			<button type="button" onClick={() => i18n.changeLanguage("en")} className={i18n.language == "en" ? "font-bold" : "cursor-pointer opacity-30 hover:opacity-100"}>
				EN
			</button>
		</>
	);
};
