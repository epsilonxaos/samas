import Container from '@components/Container'
import Text from '@components/Text'

const ListProducts = () => {
	return (
		<Container>
			<div className='grid grid-cols-1 md:grid-cols-3'>
				{Array.from({ length: 10 }, (_, index) => (
					<div
						key={index}
						className='flex flex-col items-center justify-center p-4'>
						<div className='mx-auto max-w-[375px]'>
							<img
								src={`https://picsum.photos/800?random=${index}`}
								alt={`Product ${index + 1}`}
								className='mb-8 aspect-square w-full max-w-[375px] object-cover'
							/>
							<Text.Title className='mb-0'>Product {index + 1}</Text.Title>
							<Text className='mb-12'>Description of Product {index + 1}</Text>
						</div>
					</div>
				))}
			</div>
		</Container>
	)
}

export default ListProducts
