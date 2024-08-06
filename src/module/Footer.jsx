import { motion, useInView } from "framer-motion";

import isotipo from "../assets/img/isotipo.gif";
import { useRef } from "react";
import { DEFAULT_PARAMS_INVIEW, V_FADE_IN, V_FADE_IN_FROM_BOTTOM_TO_ORIGIN } from "../constants/constants";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";

export const Footer = () => {
	const { t } = useTranslation();
	const refIsotipo = useRef(null);
	const refTextTitle = useRef(null);
	const refTextSoon = useRef(null);

	const isInViewIsotipo = useInView(refIsotipo, DEFAULT_PARAMS_INVIEW);
	const isInViewTextTitle = useInView(refTextTitle, DEFAULT_PARAMS_INVIEW);
	const isInViewTextSoon = useInView(refTextTitle, DEFAULT_PARAMS_INVIEW);

	return (
		<footer className="pb-[80px] md:pb-[50px] bg-footer md:pt-[100px] relative z-[1]">
			<div className="max-w-app px-4 mx-auto text-center mb-[250px] md:mb-[360px]">
				<motion.img ref={refIsotipo} variants={V_FADE_IN} initial={"initial"} animate={isInViewIsotipo ? "show" : ""} src={isotipo} alt="Samas" className="w-[250px] mx-auto" />
				<motion.h3 ref={refTextTitle} variants={V_FADE_IN_FROM_BOTTOM_TO_ORIGIN} initial={"initial"} animate={isInViewTextTitle ? "show" : ""} className="uppercase leading-[30px] tracking-[4.5px] max-w-[280px] md:max-w-[410px] mx-auto text-base md:text-lg xl:text-2xl mb-8">
					{t("footer.title")}
				</motion.h3>

				<Contact />

				<motion.p ref={refTextSoon} variants={V_FADE_IN} initial={"initial"} animate={isInViewTextSoon ? "show" : ""} className="uppercase text-xs">
					{t("comingSoon")}
				</motion.p>
			</div>

			<div className="relative">
				<div className="circulo-deco-left" />

				<SubFooter />
			</div>
		</footer>
	);
};

const Contact = () => {
	const ref = useRef(null);

	const isInView = useInView(ref, DEFAULT_PARAMS_INVIEW);

	return (
		<motion.ul ref={ref} variants={V_FADE_IN_FROM_BOTTOM_TO_ORIGIN} initial={"initial"} animate={isInView ? "show" : ""} className="md:flex md:items-center md:justify-center md:gap-[130px] mb-8 text-xs">
			<li className="mb-10 md:mb-0">
				<a href="tel:+529992174465">(999) 217 4465</a>
			</li>
			<li className="mb-10 md:mb-0">
				<a href="mailto:contacto@lasal.mx" className="underline">
					contacto@lasal.mx
				</a>
			</li>
			<li>
				<a href="https://www.instagram.com/samassaladita?igsh=N2psMWY2OGFseDgy" target="_blank" rel="noopener noreferrer">
					@Lasal.Samas
				</a>
			</li>
		</motion.ul>
	);
};

const SubFooter = () => {
	const { t } = useTranslation();
	const ref = useRef(null);

	const isInView = useInView(ref, DEFAULT_PARAMS_INVIEW);

	return (
		<motion.div ref={ref} variants={V_FADE_IN} initial={"initial"} animate={isInView ? "show" : ""} className="max-w-app mx-auto grid grid-cols-1 md:grid-cols-3 px-4 text-[10px] md:text-xs relative top-8 md:top-0">
			<p className="col-span-1 hidden md:block">SAMAS.MX</p>
			<p className="col-span-1 mb-2 md:mb-0 text-center">
				<a href="https://madeby.partners/" target="_blank" rel="noopener noreferrer">
					{t("madeBy")} MADEBYPARTNERS
				</a>
			</p>
			<p className="col-span-1 text-center md:text-right">
				<Link to={"politicas-de-privacidad"}>{t("privacyPolicies")}</Link>
			</p>
		</motion.div>
	);
};
