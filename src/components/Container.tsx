import { cn } from '@utils/cn'

const Container = ({
	children,
	className,
	id,
	doublePadding,
}: {
	children: React.ReactNode
	className?: string
	id?: string
	doublePadding?: boolean
}) => {
	return (
		<section
			{...(id && { id })}
			className={cn(
				'relative mx-auto w-full max-w-[1440px] px-4 py-6 md:px-8 md:py-16 lg:px-[50px]',
				doublePadding && 'py-12 md:py-32',
				className
			)}>
			{children}
		</section>
	)
}

export default Container
