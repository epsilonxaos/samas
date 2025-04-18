import SVGManuscrito from '@assets/img/lasal_manuscrito.svg'
import Container from '@components/Container'

const About = () => {
	return (
		<div className='bg-gris flex items-center justify-center md:min-h-[450px] lg:min-h-[600px]'>
			<Container>
				<div className='flex flex-col items-center justify-center py-[50px] text-center'>
					<img
						src={SVGManuscrito}
						className='mb-6 w-[145px] md:mb-10'
						alt='Manuscrito'
					/>
					<p className='text-gris-claro mt-4 max-w-[600px]'>
						En la costa tranquila de La Saladita, donde el mar dibuja ritmos lentos y las palmas susurran historias,
						existe un lugar donde el descanso toma otra forma. Un hotel de lujo consciente, envuelto en naturaleza,
						creado para quienes buscan algo más que una escapada: una forma más suave de habitar el mundo.
					</p>
				</div>
			</Container>
		</div>
	)
}

export default About
