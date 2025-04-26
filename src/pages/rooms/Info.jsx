import IMGAnimateIsotipo from '@assets/img/isotipo-animate.png'
import Container from '@components/Container'
import Text from '@components/Text'

const Info = () => {
	return (
		<Container
			doublePadding
			className='grid grid-cols-1 gap-5 md:grid-cols-3'>
			<Text.Title>Habitaciones</Text.Title>
			<Text>
				En LaSal Samas - Hotel La Saladita, cada habitación fue diseñada para acompañar el ritmo natural del entorno.{' '}
				<br />
				Aquí, el descanso se vive entre texturas orgánicas, luz suave y espacios que respiran. <br /> Desde nuestras
				Junior Suites íntimas y serenas, hasta las Ocean View Suites que se abren al horizonte, y las Beachfront Villas
				que caminan directo hacia la arena, cada espacio ofrece una experiencia única. <br /> Detalles cuidadosamente
				elegidos, materiales honestos y el sonido constante del mar: todo está pensado para invitar a la pausa, a la
				contemplación y a la conexión profunda con el presente.
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
