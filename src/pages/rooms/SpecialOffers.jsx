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
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
					magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat.
				</Text>

				<Button>Reservar</Button>
			</Container>
		</div>
	)
}

export default SpecialOffers
