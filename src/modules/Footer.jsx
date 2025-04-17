import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<footer className='bg-verde text-gris py-3 text-center md:px-[55px]'>
			<div className='mx-auto flex max-w-[1550px] flex-col md:flex-row md:items-center md:justify-between'>
				<p>Project</p>
				<p>
					Diseño y desarrollo x{' '}
					<a
						href='https://www.madeby.partners/'
						target='_blank'
						rel='noopener noreferrer'>
						<span className='font-bold'>MadebyPartners®</span>
					</a>
				</p>
				<Link to='politicas-privacidad'>Políticas de privacidad</Link>
			</div>
		</footer>
	)
}

export default Footer
