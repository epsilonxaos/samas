import { useEffect, useRef, useState } from 'react'
import { GoPlay } from 'react-icons/go'
import { MdOutlineClose } from 'react-icons/md'

type VideoModalProps = {
	videoSrc: string
	cover: string
	className?: string
}

export const VideoModal = ({ videoSrc, cover, className }: VideoModalProps) => {
	const [isOpen, setIsOpen] = useState(false)
	const videoRef = useRef<HTMLVideoElement | null>(null)

	useEffect(() => {
		if (isOpen && videoRef.current) {
			videoRef.current.play().catch(err => console.error('Error playing video:', err))
		} else if (!isOpen && videoRef.current) {
			videoRef.current.pause()
			videoRef.current.currentTime = 0
		}
	}, [isOpen])

	return (
		<section className='relative w-full'>
			<div className='hover:bg-oscuro/40 bg-oscuro/10 absolute inset-0 z-10 flex items-center justify-center transition-all'>
				<button
					onClick={() => setIsOpen(true)}
					className='cursor-pointer text-white'>
					<GoPlay size={64} />
				</button>
			</div>

			<img
				src={cover}
				alt='Video Cover'
				className='max-h-[800px] w-full rounded object-cover'
			/>

			{isOpen && (
				<div className='fixed inset-0 z-50 flex items-center justify-center bg-black/80'>
					<div className='relative w-full max-w-5xl rounded p-4'>
						<button
							onClick={() => setIsOpen(false)}
							className='absolute top-[-10px] right-2 cursor-pointer text-xl font-bold text-white'>
							<MdOutlineClose size={26} />
						</button>

						<video
							ref={videoRef}
							src={videoSrc}
							controls
							className='h-auto w-full rounded'
						/>
					</div>
				</div>
			)}
		</section>
	)
}
