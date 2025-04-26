import Button from '@components/Button'
import Container from '@components/Container'
import Text from '@components/Text'

const SpecialOffers = () => {
	return (
		<div className='bg-gris flex min-h-[600px] items-center justify-center'>
			<Container
				doublePadding
				className='text-center'>
				<Text.Title>OFERTAS ESPECIALES</Text.Title>
				<Text className='mx-auto mb-8 max-w-[470px]'>
					Para celebrar nuestra apertura, queremos invitarte a descubrir La Saladita con una oferta exclusiva: hasta un
					40% de descuento en tu estadía reservando directamente con nosotros. <br />
					Un lujo consciente, ahora más cerca que nunca.
				</Text>

				<Button>Reservar</Button>
			</Container>
		</div>
	)
}

export default SpecialOffers
