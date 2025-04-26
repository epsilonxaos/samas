import IMGAnimateIsotipo from '@assets/img/isotipo-animate.png'
import Container from '@components/Container'
import Text from '@components/Text'

const Info = () => {
	return (
		<Container
			doublePadding
			className='grid grid-cols-1 gap-5 md:grid-cols-3'>
			<Text.Title>La Saladita: un secreto que respira mar y calma</Text.Title>
			<Text>
				Ubicada en la costa del Pacífico mexicano, La Saladita es un rincón donde el tiempo se desliza al ritmo de las
				olas. <br />
				Famosa por su ola larga y noble, es el paraíso de surfistas que buscan conexión auténtica más que espectáculo.
				Pero este lugar va más allá del surf: es huellas descalzas en la arena, fruta recién cortada en el mercado
				local, atardeceres que se alargan sin prisa. <br />
				Es una comunidad viva, sencilla, que resiste al turismo masivo con una belleza que no se grita, pero que
				permanece.
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
