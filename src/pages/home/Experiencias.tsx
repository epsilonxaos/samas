import Container from '@components/Container'
import SlideGallery from '@components/SlideGallery'
import Text from '@components/Text'

import { useMemo } from 'react'

import experienciasData from '@assets/data/experiences.json'

const Experiencias = () => {
	const experiencias = useMemo(
		() =>
			experienciasData.map(experience => {
				delete experience.title

				return experience
			}),
		[experienciasData]
	)

	return (
		<Container
			doublePadding
			className='md:!pr-0'>
			<Text.Title>Experiencias</Text.Title>
			<SlideGallery gallery={experiencias} />
		</Container>
	)
}

export default Experiencias
