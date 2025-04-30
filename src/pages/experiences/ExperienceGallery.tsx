import Container from '@components/Container'
import SlideGallery from '@components/SlideGallery'
import Text from '@components/Text'

import { useMemo } from 'react'

import experienciasData from '@assets/data/experiences.json'

const ExperienceGallery = () => {
	return (
		<Container
			doublePadding
			className='md:!pr-0'>
			<SlideGallery gallery={experienciasData} />
		</Container>
	)
}

export default ExperienceGallery
