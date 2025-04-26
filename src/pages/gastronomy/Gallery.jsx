import IMGBanner from '@assets/img/dummy.jpg'
import Container from '@components/Container'

import React from 'react'

const Gallery = () => {
	const images = [
		{ id: 1, src: 'https://picsum.photos/650', alt: 'Dining Area' },
		{ id: 2, src: 'https://picsum.photos/650', alt: 'Dessert Plate' },
		{ id: 3, src: 'https://picsum.photos/650', alt: 'Coconuts' },
		{ id: 4, src: 'https://picsum.photos/650', alt: 'Main Dish' },
		{ id: 5, src: 'https://picsum.photos/650', alt: 'Hand Holding Dessert' },
		// Repetimos para ver el patrón
		{ id: 6, src: 'https://picsum.photos/650', alt: 'Dining Area 2' },
		{ id: 7, src: 'https://picsum.photos/650', alt: 'Dessert Plate 2' },
		{ id: 8, src: 'https://picsum.photos/650', alt: 'Coconuts 2' },
		{ id: 9, src: 'https://picsum.photos/650', alt: 'Main Dish 2' },
		{ id: 10, src: 'https://picsum.photos/650', alt: 'Hand Holding Dessert 2' },
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
