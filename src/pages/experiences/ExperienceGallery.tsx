import Container from '@components/Container'
import SlideGallery from '@components/SlideGallery'
import Text from '@components/Text'

import { useMemo } from 'react'

const ExperienceGallery = () => {
	const imgGallery = useMemo(() => {
		return [
			{
				id: 1,
				cover: './img/experiencias/1.jpg',
				title: 'Experiencia 1',
				description: 'Descripción de la experiencia 1',
			},
			{
				id: 2,
				cover: './img/experiencias/2.jpg',
				title: 'Experiencia 2',
				description: 'Descripción de la experiencia 2',
			},
			{
				id: 3,
				cover: './img/experiencias/3.jpg',
				title: 'Experiencia 3',
				description: 'Descripción de la experiencia 3',
			},
			{
				id: 4,
				cover: './img/experiencias/4.jpg',
				title: 'Experiencia 4',
				description: 'Descripción de la experiencia 4',
			},
			{
				id: 5,
				cover: './img/experiencias/5.jpg',
				title: 'Experiencia 5',
				description: 'Descripción de la experiencia 5',
			},
		]
	}, [])

	return (
		<Container
			doublePadding
			className='md:!pr-0'>
			<SlideGallery gallery={imgGallery} />
		</Container>
	)
}

export default ExperienceGallery
