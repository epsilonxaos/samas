import { cn } from '@utils/cn'

import type { TButtonParams } from '#types/main'

import { Link } from 'react-router-dom'

const Button = ({ children, onClick, type, className }: TButtonParams) => {
	return (
		<button
			type={type ?? 'button'}
			className={cn(
				'hover:bg-gris min-w-[140px] cursor-pointer border bg-black px-5 py-2 text-xs text-white uppercase transition-all hover:text-black',
				className
			)}
			onClick={onClick}>
			{children}
		</button>
	)
}

const Url = ({ children, href, className }: TButtonParams & { href: string }) => {
	return (
		<a
			href={href}
			target='_blank'
			rel='noopener noreferrer'
			className={cn(
				'hover:bg-gris min-w-[140px] cursor-pointer border bg-black px-5 py-2 text-xs text-white uppercase transition-all hover:text-black',
				className
			)}>
			{children}
		</a>
	)
}

const Navigation = ({ to, children, onClick, className }: TButtonParams & { to: string }) => {
	return (
		<Link
			to={to}
			className={cn(
				'hover:bg-gris min-w-[140px] cursor-pointer border bg-black px-5 py-2 text-xs text-white uppercase transition-all hover:text-black',
				className
			)}
			onClick={onClick}>
			{children}
		</Link>
	)
}

Button.Url = Url
Button.Navigation = Navigation

export default Button
