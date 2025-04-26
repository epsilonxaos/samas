import IMGBanner from '@assets/img/dummy.jpg'
import Container from '@components/Container'

import React from 'react'

const Gallery = () => {
	const images = [
		{ id: 1, src: './img/restaurante/1.jpg', alt: 'Dining Area' },
		{ id: 2, src: './img/restaurante/2.jpg', alt: 'Dessert Plate' },
		{ id: 3, src: './img/restaurante/3.jpg', alt: 'Coconuts' },
		{ id: 4, src: './img/restaurante/4.jpg', alt: 'Main Dish' },
		{ id: 5, src: './img/restaurante/5.jpg', alt: 'Hand Holding Dessert' },
	]

	return (
		<Container className='!p-0'>
			<div className='grid grid-cols-1 gap-2 md:grid-cols-3'>
				{images.map((image, index) => {
					// Calculamos el patrón: cada 5 imágenes
					const patternIndex = index % 5

					// Condicional para col-span
					const colSpanClass = patternIndex === 3 ? 'md:col-span-2' : 'md:col-span-1'

					return (
						<div
							key={image.id}
							className={`${colSpanClass}`}>
							<img
								src={image.src}
								alt={image.alt}
								className='h-[300px] w-full object-cover md:h-[450px] lg:h-[550px]'
							/>
						</div>
					)
				})}
			</div>
		</Container>
	)
}

export default Gallery
