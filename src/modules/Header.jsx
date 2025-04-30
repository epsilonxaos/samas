import SVGLogotipo from '@assets/img/logotipo.svg'
import SVGMenu from '@assets/img/menu.svg'
import BtnReservar from '@components/BtnReservar'
import Button from '@components/Button'
import Container from '@components/Container'
import { useClickAway } from '@uidotdev/usehooks'

import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Header = () => {
	const [isOpen, setIsOpen] = useState(false)
	const toggleMenu = () => setIsOpen(!isOpen)
	const closeMenu = () => setIsOpen(false)

	return (
		<header className='w-full bg-white py-5'>
			<Container className='relative flex items-center justify-between !py-0'>
				<button onClick={toggleMenu}>
					<img
						src={SVGMenu}
						alt='Menu'
						className='w-[28px]'
					/>
				</button>

				<Link
					to='/'
					className='md:absolute md:left-1/2 md:-translate-x-1/2'>
					<img
						src={SVGLogotipo}
						alt='Logotipo'
						className='w-[160px] md:w-[210px]'
					/>
				</Link>

				<BtnReservar className='hidden md:block' />
			</Container>

			<AnimatePresence mode='wait'>{isOpen && <Menu closeMenu={closeMenu} />}</AnimatePresence>
		</header>
	)
}

const Menu = ({ closeMenu }) => {
	const ref = useClickAway(() => {
		closeMenu()
	})

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, x: '-100%' }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: '-100%' }}
			transition={{ duration: 0.3, ease: 'easeInOut' }}
			className='bg-gris absolute top-0 right-0 left-0 z-50 h-full w-full p-[50px] pt-[80px] md:max-h-[780px] md:w-[500px] landscape:pb-[20px] md:landscape:pb-[50px]'>
			<div className='flex h-full w-full items-center justify-start'>
				<button
					className='absolute top-[30px] left-[50px] cursor-pointer'
					onClick={closeMenu}>
					<IoClose size={40} />
				</button>

				<nav className='landscape:h-full md:landscape:h-auto'>
					<ul className='text-grisOscuro mb-16 grid grid-cols-1 gap-6 text-xl uppercase md:mb-24 md:gap-10 md:text-3xl landscape:mb-8 landscape:gap-3 md:landscape:mb-16 md:landscape:gap-6'>
						<li>
							<Link
								onClick={closeMenu}
								to='/rooms'>
								Habitaciones
							</Link>
						</li>
						<li>
							<Link
								onClick={closeMenu}
								to='/experiences'>
								Experiencias
							</Link>
						</li>
						<li>
							<Link
								onClick={closeMenu}
								to='/gastronomy'>
								Gastronomía
							</Link>
						</li>
						<li>
							<Link
								onClick={closeMenu}
								to='/la-saladita'>
								La saladita
							</Link>
						</li>
						{/* <li>
							<Link
								onClick={closeMenu}
								to='/products'>
								Productos
							</Link>
						</li> */}
					</ul>

					<BtnReservar />
				</nav>
			</div>
		</motion.div>
	)
}

export default Header
