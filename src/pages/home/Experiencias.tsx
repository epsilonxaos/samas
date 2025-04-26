import Container from '@components/Container'
import SlideGallery from '@components/SlideGallery'
import Text from '@components/Text'

import { useMemo } from 'react'

const Experiencias = () => {
	const imgGallery = useMemo(() => {
		return [
			{
				id: 1,
				cover: './img/experiencias/1.jpg',
			},
			{
				id: 2,
				cover: './img/experiencias/2.jpg',
			},
			{
				id: 3,
				cover: './img/experiencias/3.jpg',
			},
			{
				id: 4,
				cover: './img/experiencias/4.jpg',
			},
			{
				id: 5,
				cover: './img/experiencias/5.jpg',
			},
		]
	}, [])

	return (
		<Container
			doublePadding
			className='md:!pr-0'>
			<Text.Title>Experiencias</Text.Title>
			<SlideGallery gallery={imgGallery} />
		</Container>
	)
}

export default Experiencias
