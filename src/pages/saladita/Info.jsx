import IMGAnimateIsotipo from '@assets/img/isotipo-animate.png'
import Container from '@components/Container'
import Text from '@components/Text'

const Info = () => {
	return (
		<Container
			doublePadding
			className='grid max-w-[1520px] grid-cols-1 gap-5 md:grid-cols-3'>
			<Text.Title>La Saladita: un secreto que respira mar y calma</Text.Title>
			<Text>
				La Saladita, en la costa del Pacífico mexicano, es mar lento, olas largas y alma de surf. <br />
				Un destino sencillo y sereno, donde la comunidad, la naturaleza y el ritmo pausado crean una belleza que se
				queda, sin necesidad de gritar.
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
