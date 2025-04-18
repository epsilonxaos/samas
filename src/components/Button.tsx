import { cn } from '@utils/cn'

import type { TButtonParams } from '#types/main'

import { Link } from 'react-router-dom'

const Button = ({ children, onClick, type, className }: TButtonParams) => {
	return (
		<button
			type={type ?? 'button'}
			className={cn(
				'bg-gris hover:text-gris min-w-[140px] cursor-pointer border px-5 py-2 text-xs text-black uppercase transition-all hover:bg-black',
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
				'bg-gris hover:text-gris min-w-[140px] cursor-pointer border px-5 py-2 text-xs text-black uppercase transition-all hover:bg-black',
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
				'bg-gris hover:text-gris min-w-[140px] cursor-pointer border px-5 py-2 text-xs text-black uppercase transition-all hover:bg-black',
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
