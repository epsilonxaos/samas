import IMGAnimateIsotipo from '@assets/img/isotipo-animate.png'
import Container from '@components/Container'
import Text from '@components/Text'

const LaSaladitaComponent = ({ children }) => {
	return (
		<Container>
			<article className='mx-auto max-w-[525px] text-center'>
				<img
					src={IMGAnimateIsotipo}
					alt='Animated Isotipo'
					className='mx-auto mb-5 h-[55px] w-[175px] object-cover'
				/>
				<Text.Title>La saladita</Text.Title>
				<Text>{children}</Text>
			</article>
		</Container>
	)
}

export default LaSaladitaComponent
