import { useTranslation } from "react-i18next";

const Politicas = () => {
	const { i18n } = useTranslation();

	if (i18n.language === "es")
		return (
			<section>
				<div className="max-w-screen-xl px-8 py-20 mx-auto md:pt-40 md:pb-14">
					<h3 className="uppercase leading-[30px] tracking-[4.5px] text-center text-base md:text-lg xl:text-2xl mb-8">Políticas de privacidad</h3>

					<p className=" text-xs md:text-sm mb-5">Barracuda Electrica SAPI de CV respeta su derecho de privacidad. Esta política resume qué información personal podemos recoger, de qué manera podemos utilizar esta información y otros temas importantes relacionados con su privacidad y protección de datos.</p>
					<p className=" text-xs md:text-sm mb-5">Es política de Barracuda Electrica SAPI de CV cumplir con todas las leyes de privacidad y de protección de datos vigentes. Este compromiso refleja el valor que le damos al hecho de obtener y conservar la confianza de nuestros clientes, socios comerciales y demás personas que comparten su información personal con nosotros.</p>
					<p className=" text-xs md:text-sm mb-5">Esta Política se aplica a todos los sitios de Internet y aplicaciones móviles administrados por Barracuda Electrica SAPI de CV o en su nombre, e incluye las compañías de Barracuda Electrica SAPI de CV de todo el mundo (conocidas como “sitio de internet o aplicación móvil de Barracuda Electrica SAPI de CV”). También se aplica a toda la información personal que Barracuda Electrica SAPI de CV pueda recoger de cualquier otro modo:</p>
					<ul>
						<li>
							<p className=" text-xs md:text-sm mb-2">1. A través de nuestros productos y servicios.</p>
						</li>
						<li>
							<p className=" text-xs md:text-sm mb-2">2. Cuando interactúa con nosotros por medios distintos de un sitio de internet o aplicación móvil de Barracuda Electrica SAPI de CV, por ejemplo, de manera presencial, por teléfono o en una feria de muestras o formación.</p>
						</li>
						<li>
							<p className=" text-xs md:text-sm mb-5">3. A través de nuestros clientes, distribuidores, proveedores, vendedores y otros socios comerciales (en conjunto, “socios comerciales”).</p>
						</li>
					</ul>
					<p className=" text-xs md:text-sm mb-5">
						No obstante, los sitios de Internet, aplicaciones móviles, productos y servicios de Barracuda Electrica SAPI de CV pueden tener fines y características distintas. Si se necesita proporcionar información adicional o diferente para un determinado sitio de internet, aplicación móvil, producto o servicio específico de Barracuda Electrica SAPI de CV, se publicará dicha obligación por separado en el sitio de internet, aplicación móvil, producto o servicio que sea pertinente. Cada una de estas obligaciones de proporcionar información adicionales, políticas o declaraciones de
						privacidad específicas (“Declaración de Privacidad Específica”) complementan y enmiendan esta Política.
					</p>
				</div>
			</section>
		);

	return (
		<section>
			<div className="max-w-screen-xl px-8 py-20 mx-auto md:pt-40 md:pb-14">
				<h3 className="uppercase leading-[30px] tracking-[4.5px] text-center text-base md:text-lg xl:text-2xl mb-8">Privacy policy</h3>

				<p className=" text-xs md:text-sm mb-5">Barracuda Electrica SAPI de CV respects your right to privacy. This policy outlines what personal information we may collect, how we may use this information, as well as other important issues regarding your privacy and data protection.</p>
				<p className=" text-xs md:text-sm mb-5">Barracuda Electrica SAPI de CV has the policy of complying with all current privacy and data protection laws. This commitment reflects the value we place on earning and keeping the trust of our customers, business partners, and anyone who shares their personal information with us.</p>
				<p className=" text-xs md:text-sm mb-5">This Policy applies to all Internet sites and mobile applications operated by or on behalf of Barracuda Electrica SAPI de CV, and includes Barracuda Electrica SAPI de CV companies worldwide (known as “Website or Mobile Application from LASAL”). It also applies to all personal information that Barracuda Electrica SAPI de CV may otherwise collect:</p>
				<ul>
					<li>
						<p className=" text-xs md:text-sm mb-2">1. Through our products and services.</p>
					</li>
					<li>
						<p className=" text-xs md:text-sm mb-2">2. Through interaction by means other than a website or application for mobile phone from Barracuda Electrica SAPI de CV. For example, in person, by phone or in a trade fair or training.</p>
					</li>
					<li>
						<p className=" text-xs md:text-sm mb-5">3. Through our customers, distributors, suppliers, vendors and other business partners (collectively known as “business associates”).</p>
					</li>
				</ul>
				<p className=" text-xs md:text-sm mb-5">
					However, the Internet sites, mobile applications, products and services of Barracuda Electrica SAPI de CV may have different purposes and characteristics. If it is necessary to provide additional or different information for a specific website, mobile application, product or service of Barracuda Electrica SAPI de CV, said obligation will be published separately on the relevant website, mobile application, product or service. Each of these additional information obligations, specific privacy policies or statements (“Specific Privacy Statement”) supplement and amend this
					Policy.
				</p>
			</div>
		</section>
	);
};

export default Politicas;
