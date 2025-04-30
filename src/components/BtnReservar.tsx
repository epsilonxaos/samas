import Button from '@components/Button'
import { cn } from '@utils/cn'

const BtnReservar = ({ className }: { className?: string }) => (
	<Button.Url
		href='https://hotels.cloudbeds.com/es/reservation/UNqGH5'
		className={cn('inline-block text-center', className)}>
		RESERVAR
	</Button.Url>
)

export default BtnReservar
