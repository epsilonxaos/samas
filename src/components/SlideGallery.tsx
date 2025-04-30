import Text from '@components/Text'
import { cn } from '@utils/cn'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import { Autoplay, Navigation } from 'swiper/modules'

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
			<nav className='absolute top-1/2 z-50 flex w-full -translate-y-1/2 items-center justify-between gap-2 px-4 transition-all'>
				<button
					className='border-oscuro h-[40px] cursor-pointer rounded-xs border bg-white/50 opacity-70 hover:opacity-100'
					onClick={() => swiperRef.current?.slidePrev()}>
					<MdKeyboardArrowLeft size={24} />
				</button>
				<button
					className='border-oscuro h-[40px] cursor-pointer rounded-xs border bg-white/50 opacity-70 hover:opacity-100'
					onClick={() => swiperRef.current?.slideNext()}>
					<MdKeyboardArrowRight size={24} />
				</button>
			</nav>

			<Swiper
				modules={[Navigation, Autoplay]} // Add the Lazy module here
				// lazy={true}
				navigation={{
					enabled: false,
				}}
				speed={1000}
				loop
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
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
								className={cn('h-[400px] w-full object-cover md:h-[630px]', classNameImg)}
								loading='lazy'
							/>

							{slide.title && (
								<div className='pt-8'>
									<Text.Title className={'xl:text-xl'}>{slide.title}</Text.Title>
									<Text>{slide.description}</Text>
								</div>
							)}
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default SlideGallery
