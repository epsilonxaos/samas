import Text from '@components/Text'
import { cn } from '@utils/cn'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'

import { useRef } from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { Swiper, SwiperSlide } from 'swiper/react'

type TSlideGallery = {
	id: number
	cover: string
	altText?: string
	title?: string
	description?: string
}
type TSlideGalleryProps = {
	gallery: TSlideGallery[]
	viewRoomGalleryActive?: boolean
	classNameSlide?: string
	classNameImg?: string
	className?: string
}

const SlideGallery = ({
	gallery,
	classNameSlide,
	classNameImg,
	className,
	viewRoomGalleryActive,
}: TSlideGalleryProps) => {
	const swiperRef = useRef()

	return (
		<div className='relative'>
			<nav className='mb-4 flex w-full items-center justify-end gap-2 pr-4 transition-all md:pr-10'>
				<button
					className='border-oscuro cursor-pointer rounded-xs border opacity-70 hover:opacity-100'
					onClick={() => swiperRef.current?.slidePrev()}>
					<MdKeyboardArrowLeft size={24} />
				</button>
				<button
					className='border-oscuro cursor-pointer rounded-xs border opacity-70 hover:opacity-100'
					onClick={() => swiperRef.current?.slideNext()}>
					<MdKeyboardArrowRight size={24} />
				</button>
			</nav>

			<Swiper
				modules={[Navigation]} // Add the Lazy module here
				// lazy={true}
				navigation={{
					enabled: false,
				}}
				spaceBetween={20}
				slidesPerView={viewRoomGalleryActive ? 2.2 : 3}
				onBeforeInit={swiper => {
					swiperRef.current = swiper
				}}
				className={cn('', className)}
				breakpoints={{
					0: {
						slidesPerView: 1,
					},
					640: {
						slidesPerView: viewRoomGalleryActive ? 2.2 : 2,
					},
					1024: {
						slidesPerView: viewRoomGalleryActive ? 2.2 : 3,
					},
				}}>
				{gallery.map((slide, index) => (
					<SwiperSlide
						key={index}
						className={cn('', classNameSlide)}>
						<div className='relative'>
							<img
								src={slide.cover}
								alt={slide.altText ?? slide.title}
								className={cn('h-auto max-h-[630px] w-full object-cover', classNameImg)}
								loading='lazy'
							/>

							<div className='pt-8'>
								<Text.Title className={'xl:text-xl'}>{slide.title}</Text.Title>
								<Text>{slide.description}</Text>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default SlideGallery
