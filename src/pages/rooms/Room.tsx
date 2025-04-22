import IMGAnimateIsotipo from '@assets/img/isotipo-animate.png'
import Button from '@components/Button'
import Container from '@components/Container'
import SlideGallery from '@components/SlideGallery'
import Text from '@components/Text'

import { useMemo } from 'react'

const Room = ({ data }) => {
	const imgGallery = useMemo(() => {
		return [
			{
				id: 1,
				cover:
					'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGZpc2h8ZW58MHx8fHwxNjg3NTY5NzA0&ixlib=rb-4.0.3&q=80&w=1080',
			},
			{
				id: 2,
				cover:
					'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGZpc2h8ZW58MHx8fHwxNjg3NTY5NzA0&ixlib=rb-4.0.3&q=80&w=1080',
			},
			{
				id: 3,
				cover:
					'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGZpc2h8ZW58MHx8fHwxNjg3NTY5NzA0&ixlib=rb-4.0.3&q=80&w=1080',
			},
			{
				id: 4,
				cover:
					'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGZpc2h8ZW58MHx8fHwxNjg3NTY5NzA0&ixlib=rb-4.0.3&q=80&w=1080',
			},
			{
				id: 5,
				cover:
					'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGZpc2h8ZW58MHx8fHwxNjg3NTY5NzA0&ixlib=rb-4.0.3&q=80&w=1080',
			},
		]
	}, [])

	return (
		<Container className='md:!pr-0'>
			<SlideGallery
				viewRoomGalleryActive
				gallery={imgGallery}
			/>

			<div className='grid grid-cols-1 gap-4 pt-16 md:grid-cols-3 md:gap-10'>
				<div className='col-span-1'>
					<Text.Title className={'text-center md:text-left'}>Nombre de Habitación 1</Text.Title>
					<Button className={'hidden bg-white md:block'}>Reservar</Button>
				</div>
				<div className='relative col-span-1 md:col-span-2 md:pr-10'>
					<ul className='mb-14 grid list-disc grid-cols-2 justify-between pl-4 md:mb-0'>
						<li>Lorem ipsum</li>
						<li>dolor sit amet</li>
						<li>Consectetur</li>
						<li>Discing elit, sed</li>
						<li>Do eiusmod tempor</li>

						<li>Lorem ipsum</li>
						<li>dolor sit amet</li>
						<li>Consectetur</li>
						<li>Discing elit, sed</li>
						<li>Do eiusmod tempor</li>
					</ul>

					<Button className={'mx-auto mb-10 block bg-white md:hidden'}>Reservar</Button>

					<img
						src={IMGAnimateIsotipo}
						alt='Animated Isotipo'
						className='mx-auto mb-5 h-[55px] w-[175px] object-cover md:absolute md:top-0 md:-right-10 md:mr-0 md:h-[100px] md:w-[200px]'
					/>
				</div>
			</div>
		</Container>
	)
}

export default Room
