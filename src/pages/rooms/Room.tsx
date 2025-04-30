import BtnReservar from '@components/BtnReservar'
import Container from '@components/Container'
import SlideGallery from '@components/SlideGallery'
import Text from '@components/Text'

const Room = ({ data }) => {
	if (!data) return null

	return (
		<Container className='md:!pr-0'>
			<SlideGallery
				viewRoomGalleryActive
				gallery={data.gallery}
			/>

			<div className='grid grid-cols-1 gap-4 pt-16 md:grid-cols-3 md:gap-10'>
				<div className='col-span-1'>
					<Text.Title className={'text-center md:text-left'}>{data.name}</Text.Title>
					<BtnReservar className={'hidden bg-white md:block'} />
				</div>
				<div className='relative col-span-1 md:col-span-2 md:pr-[150px]'>
					<ul className='mb-14 grid list-disc grid-cols-2 justify-between pl-4 md:mb-0'>
						{data.amenities.map((amenity, index) => (
							<li key={'amenity_' + index}>{amenity}</li>
						))}
					</ul>

					<BtnReservar className={'mx-auto mb-10 block bg-white md:hidden'} />

					<img
						src={data.icon}
						alt='Animated Isotipo'
						className='mx-auto mb-5 size-[35px] -translate-y-1/2 object-contain md:absolute md:top-1/2 md:right-2 md:mr-0 md:size-[50px]'
					/>
				</div>
			</div>
		</Container>
	)
}

export default Room
