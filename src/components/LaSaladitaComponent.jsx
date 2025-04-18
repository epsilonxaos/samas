import IMGAnimateIsotipo from '@assets/img/isotipo-animate.png'
import Container from '@components/Container'
import Text from '@components/Text'

const LaSaladitaComponent = () => {
	return (
		<Container>
			<article className='mx-auto max-w-[525px] text-center'>
				<img
					src={IMGAnimateIsotipo}
					alt='Animated Isotipo'
					className='mx-auto mb-5 h-[55px] w-[175px] object-cover'
				/>
				<Text.Title>La saladita</Text.Title>
				<Text>
					Nuestra ubicación privilegiada, a solo unos pasos de las famosas olas de La Saladita, te brinda un acceso
					inigualable a algunos de los mejores spots de surf en México. Si eres un amante de las olas, has llegado al
					lugar adecuado.
				</Text>
			</article>
		</Container>
	)
}

export default LaSaladitaComponent
