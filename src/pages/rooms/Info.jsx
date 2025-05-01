import IMGAnimateIsotipo from '@assets/img/isotipo-animate.png'
import Container from '@components/Container'
import Text from '@components/Text'

const Info = () => {
	return (
		<Container
			doublePadding
			className='grid max-w-[1520px] grid-cols-1 gap-5 md:grid-cols-3'>
			<Text.Title>Habitaciones</Text.Title>
			<Text>
				Cada habitación es un refugio de calma frente al mar. Junior Suites, Ocean View Suites y Beachfront Villas
				ofrecen lujo consciente entre texturas naturales y luz suave. Diseñadas para invitar al descanso, la
				contemplación y la conexión con el entorno de La Saladita, Guerrero.
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
