import { cn } from '@utils/cn'

import type { TextProps, TitleProps } from '#types/main'

import parse from 'html-react-parser'

const Text = ({ children, className, parseHtml }: TextProps) => {
	if (parseHtml && !children) return null

	if (parseHtml) return <div className={cn('mb-4 text-sm', className)}>{parse(children as string)}</div>

	return <p className={cn('mb-4 text-sm', className)}>{children}</p>
}

const Title = ({ children, className, parseHtml }: TitleProps) => {
	if (parseHtml && !children) return null

	if (parseHtml)
		return (
			<div className={cn('mb-8 text-lg uppercase md:text-xl xl:text-3xl', className)}>{parse(children as string)}</div>
		)

	return <h3 className={cn('mb-8 text-lg uppercase md:text-xl xl:text-3xl', className)}>{children}</h3>
}

Text.Title = Title

export default Text
