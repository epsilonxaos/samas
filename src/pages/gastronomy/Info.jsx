import IMGAnimateIsotipo from '@assets/img/isotipo-animate.png'
import Container from '@components/Container'
import Text from '@components/Text'

const Info = () => {
	return (
		<Container
			doublePadding
			className='grid grid-cols-1 gap-5 md:grid-cols-3'>
			<Text.Title>Sabores que respetan la tierra</Text.Title>
			<Text>
				Nuestra cocina nace del entorno: ingredientes traídos de huertos locales, pesca del día y sabores que respetan
				el ritmo de la naturaleza. <br />
				Cada plato es una celebración del presente, preparado con técnicas sencillas y fuego abierto. <br />
				Aquí, comer no es solo alimentarse, es un ritual lento, consciente y compartido. Una experiencia que sabe a mar,
				a fruta madura, a hogar lejos de casa.
			</Text>
			<img
				src={IMGAnimateIsotipo}
				alt='Animated Isotipo'
				className='mx-auto mb-5 h-[55px] w-[175px] object-cover md:mr-0'
			/>
		</Container>
	)
}

export default Info
