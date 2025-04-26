import IMGCover1 from '@assets/img/home/info-1.png'
import IMGCover2 from '@assets/img/home/info-2.png'
import IMGIsotipoSamas from '@assets/img/samas_isotipo.svg'
import Button from '@components/Button'
import Container from '@components/Container'
import Text from '@components/Text'
import { cn } from '@utils/cn'

const LaSal = () => {
	return (
		<Container className='grid grid-cols-1 gap-0 p-0 md:grid-cols-2 md:!px-0 md:pt-0'>
			<div className='order-2 col-span-1 md:order-1'>
				<InfoComponent className='md:hidden' />
				<img
					src={IMGCover1}
					alt='Portada 1'
					className='h-[400px] w-full object-cover md:h-[650px]'
				/>

				<InfoComponent className='hidden md:flex' />
			</div>

			<div className='order-1 col-span-1 md:order-2'>
				<TitleComponent />
				<img
					src={IMGCover2}
					alt='Portada 2'
					className='h-[400px] w-full object-cover md:h-[650px]'
				/>
			</div>
		</Container>
	)
}

const TitleComponent = ({ className }) => {
	return (
		<article
			className={cn('flex min-h-[350px] items-center justify-center px-4 py-10 text-center md:h-[530px]', className)}>
			<Text.Title className='mx-auto max-w-[340px]'>
				EN LASAL, COMBINAMOS LA PASIÓN POR EL SURF CON LA COMODIDAD Y EL LUJO
			</Text.Title>
		</article>
	)
}

const InfoComponent = ({ className }) => {
	return (
		<article
			className={cn('flex min-h-[350px] items-center justify-center px-4 py-10 text-center md:h-[530px]', className)}>
			<div className='mx-auto max-w-[380px]'>
				<img
					src={IMGIsotipoSamas}
					alt='Isotipo Samas'
					className='mx-auto mb-10 w-[38px]'
				/>
				<Text className='mb-10'>
					Nuestras suites y villas fueron diseñadas para acompañar el ritmo del mar. Cada espacio invita al descanso
					profundo, al silencio y a la contemplación. Desde terrazas con vista al océano hasta duchas abiertas al cielo,
					las habitaciones de LaSal Samas son un refugio sereno, donde el lujo se siente, pero no se impone.
				</Text>

				<Button>Reservar</Button>
			</div>
		</article>
	)
}

export default LaSal
