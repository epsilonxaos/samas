import Container from '@components/Container'
import SlideGallery from '@components/SlideGallery'

import { useMemo } from 'react'

const Gallery = () => {
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
			<SlideGallery gallery={imgGallery} />
		</Container>
	)
}

export default Gallery
