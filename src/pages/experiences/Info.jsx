import IMGAnimateIsotipo from '@assets/img/isotipo-animate.png'
import Container from '@components/Container'
import Text from '@components/Text'

const Info = () => {
	return (
		<Container
			doublePadding
			className='grid grid-cols-1 gap-5 md:grid-cols-3'>
			<Text.Title>experiencias</Text.Title>
			<Text>
				En LaSal Samas - Hotel La Saladita, las experiencias no se programan, se descubren. <br />
				Desde clases de surf al amanecer hasta caminatas entre huertas, cada momento está tejido por el entorno y la
				comunidad. <br />
				Nuestro blog es un espacio vivo donde compartimos historias del mar, rituales de bienestar, recomendaciones
				locales y maneras de conectar con este rincón del mundo de forma más presente, más simple, más libre.
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
