import Container from '@components/Container'
import { cn } from '@utils/cn'

import type { ReactNode } from 'react'

interface BannerProps {
	cover: string
	children?: ReactNode
	includeRestHeader?: boolean
	className?: string
}

const Banner = ({ children, includeRestHeader, cover, className }: BannerProps) => {
	return (
		<Container
			className={cn(
				'relative h-svh w-full max-w-none bg-white !p-0',
				includeRestHeader && 'h-[calc(100vh-70px)] md:h-[calc(100vh-74px)]',
				className
			)}>
			<img
				src={cover}
				className='absolute top-0 left-0 h-full w-full object-cover object-center'
				alt='banner cover'
			/>
			{children}
		</Container>
	)
}

export default Banner
