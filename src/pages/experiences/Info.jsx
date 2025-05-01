import IMGAnimateIsotipo from '@assets/img/isotipo-animate.png'
import Container from '@components/Container'
import Text from '@components/Text'

const Info = () => {
	return (
		<Container
			doublePadding
			className='grid max-w-[1520px] grid-cols-1 gap-5 md:grid-cols-3'>
			<Text.Title>experiencias</Text.Title>
			<Text>
				En LaSal Samas - Hotel La Saladita, las experiencias nacen del entorno. Surf al amanecer, caminatas entre
				huertas y rituales de bienestar te conectan con la esencia de este lugar: natural, libre y presente.
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
