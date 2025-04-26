import Container from '@components/Container'
import SlideGallery from '@components/SlideGallery'

import { useMemo } from 'react'

const Gallery = () => {
	const imgGallery = useMemo(() => {
		return [
			{
				id: 0,
				cover: './img/saladita/1.jpg',
			},
			{
				id: 1,
				cover: './img/saladita/2.jpg',
			},
			{
				id: 2,
				cover: './img/saladita/3.jpg',
			},
			{
				id: 3,
				cover: './img/saladita/4.jpg',
			},
			{
				id: 4,
				cover: './img/saladita/5.jpg',
			},
			{
				id: 5,
				cover: './img/saladita/6.jpg',
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
