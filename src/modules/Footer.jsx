import IMGManuscrito from '@assets/img/lasal_manuscrito-white.svg'
import IMGSamasFooter from '@assets/img/samas-footer.svg'
import Container from '@components/Container'
import Text from '@components/Text'

import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<footer className='bg-verdeAqua text-white'>
			<Container>
				<div className='flex flex-col items-center justify-around md:flex-row'>
					{/* <Text.Title>Join our Newsletter</Text.Title> */}
					<img
						src={IMGManuscrito}
						alt='Manuscrito'
						className='mx-auto w-[150px] md:mr-0 md:ml-auto'
					/>
				</div>

				<hr className='my-16' />

				<ul className='grid grid-cols-2 gap-4 md:flex md:flex-row md:items-center md:justify-around'>
					<li className='mb-6 md:mb-0'>
						<Text className={'mb-8 uppercase'}>Contacto</Text>
						<Text className={'mb-0 text-xs'}>
							<a href='tel:+529992923085'>+52 999 292 3085</a>
						</Text>
						<Text className={'mb-0 text-xs'}>
							<a href='mailto:reservaciones@lasal.mx'>reservaciones@lasal.mx</a>
						</Text>
						<Text className={'mb-0 text-xs'}>
							<a
								href='http://www.lasal.mx'
								target='_blank'
								rel='noopener noreferrer'>
								@Lasal
							</a>
						</Text>
					</li>
					<li className='mb-6 md:mb-0'>
						<Text className={'mb-8 uppercase'}>Info</Text>

						<Text className={'mb-0 text-xs'}>Stay</Text>
						<Text className={'mb-0 text-xs'}>Restaurant</Text>
					</li>
					<li>
						<Text className={'mb-8 uppercase'}>Nosotros</Text>

						<Text className={'mb-0 text-xs'}>Explore</Text>
						<Text className={'mb-0 text-xs'}>The Lost World</Text>
					</li>
					<li>
						<Text className={'mb-8 uppercase'}>Direccion</Text>
						<Text className={'mb-0 text-xs'}>Estero colorado, C. Cabeza de Vaca sn, 40802 La Saladita, Gro.</Text>
					</li>
				</ul>

				<img
					src={IMGSamasFooter}
					alt='Lasan x Samas'
					className='mx-auto mt-16 w-[200px] md:w-[300px] lg:w-[450px]'
				/>
			</Container>

			<div className='bg-oscuro w-full py-2 text-center text-xs text-white'>Desarrollado x Made by Partners</div>
		</footer>
	)
}

export default Footer
