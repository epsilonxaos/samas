import { motion, useInView } from "framer-motion";

import icono from "../../assets/img/icono.svg";
import img_1 from "../../assets/img/1.png";
import img_2 from "../../assets/img/2.png";
import img_1m from "../../assets/img/1m.png";
import img_2m from "../../assets/img/2m.png";
import { twMerge } from "tailwind-merge";
import { useRef } from "react";
import { DEFAULT_PARAMS_INVIEW, V_FROM_BOTTOM_TO_ORIGIN, V_FROM_LEFT_TO_ORIGIN, V_FROM_RIGHT_TO_ORIGIN } from "../../constants/constants";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
	const refImgD1 = useRef(null);
	const refImgD2 = useRef(null);
	const refImgM1 = useRef(null);
	const refImgM2 = useRef(null);

	const refMainText = useRef(null);
	const refSecundaryText = useRef(null);

	const isInViewIMGD1 = useInView(refImgD1, DEFAULT_PARAMS_INVIEW);
	const isInViewIMGD2 = useInView(refImgD2, DEFAULT_PARAMS_INVIEW);
	const isInViewIMGM1 = useInView(refImgM1, DEFAULT_PARAMS_INVIEW);
	const isInViewIMGM2 = useInView(refImgM2, DEFAULT_PARAMS_INVIEW);

	const isInViewMainText = useInView(refMainText, DEFAULT_PARAMS_INVIEW);
	const isInViewSecundaryText = useInView(refSecundaryText, DEFAULT_PARAMS_INVIEW);

	return (
		<section className="py-12 md:py-16 lg:py-32 w-full">
			<div className="relative">
				<div className="serpiente-deco"></div>
				<div className="serpiente-deco-movil"></div>

				<div className="max-w-app mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 relative z-10">
						<div className="col-span-1">
							<motion.div ref={refMainText} variants={V_FROM_LEFT_TO_ORIGIN} initial={"initial"} animate={isInViewMainText ? "show" : ""} className="py-[60px] md:py-16 min-h-[200px] max-w-[250px] md:max-w-[425px] mx-auto md:mr-12 xl:mr-24 pl-4">
								<AboutTextMain />
							</motion.div>

							{/* // * Movil */}
							<motion.img ref={refImgM1} variants={V_FROM_BOTTOM_TO_ORIGIN} initial={"initial"} animate={isInViewIMGM1 ? "show" : ""} src={img_1m} alt="Surf" className="w-[calc(100%-60px)] object-cover min-h-[400px] md:hidden" />
							{/* // ! Escritorio */}
							<motion.img ref={refImgD2} variants={V_FROM_BOTTOM_TO_ORIGIN} initial={"initial"} animate={isInViewIMGD2 ? "show" : ""} src={img_2} alt="palmeras" className="w-full hidden md:block object-cover min-h-[600px] max-w-max ml-auto" />
						</div>

						<div className="col-span-1">
							{/* // * Movil */}
							<motion.img ref={refImgM2} variants={V_FROM_RIGHT_TO_ORIGIN} initial={"initial"} animate={isInViewIMGM2 ? "show" : ""} src={img_2m} alt="palmeras" className="w-[calc(100%-100px)] object-cover min-h-[280px] max-h-[300px] ml-auto md:hidden relative -top-[90px]" />

							{/* // ! Escritorio */}
							<motion.img ref={refImgD1} variants={V_FROM_RIGHT_TO_ORIGIN} initial={"initial"} animate={isInViewIMGD1 ? "show" : ""} src={img_1} alt="Surf" className="w-full object-cover min-h-[450px] hidden md:block" />

							<motion.div ref={refSecundaryText} variants={V_FROM_RIGHT_TO_ORIGIN} initial={"initial"} animate={isInViewSecundaryText ? "show" : ""} className="pb-11 md:py-16 max-w-[260px] md:max-w-[375px] max-md:mx-auto md:ml-12 xl:ml-24 pr-4">
								<AboutTextSecundary />
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

const TextFormat = ({ children, className }) => {
	return <p className={twMerge("uppercase text-xs md:text-sm text-center tracking-[1.8px] ", className)}>{children}</p>;
};

const AboutTextMain = () => {
	const { t } = useTranslation();

	return (
		<>
			<TextFormat className={"mb-8"}>{t("home.about.p1")}</TextFormat>
			<TextFormat>{t("home.about.p2")}</TextFormat>
		</>
	);
};

const AboutTextSecundary = () => {
	const { t } = useTranslation();

	return (
		<>
			<img src={icono} width="35px" alt="Icono en rayas" className="mx-auto mb-11" />
			<TextFormat className=" mb-8">{t("home.about.p3")}</TextFormat>
			<TextFormat className=" mb-8">{t("home.about.p4")}</TextFormat>
			<TextFormat>{t("home.about.p5")}</TextFormat>
		</>
	);
};

export default AboutSection;
