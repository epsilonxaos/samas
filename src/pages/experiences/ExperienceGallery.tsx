import Container from '@components/Container'
import SlideGallery from '@components/SlideGallery'

const ExperienceGallery = () => {
	return (
		<Container
			doublePadding
			className='md:!pr-0'>
			<SlideGallery
				gallery={[
					{
						id: 1,
						cover: './img/experiencias/1.jpg?v=1',
						description:
							'Surf en La Saladita: olas largas, espíritu libre y mar sin prisa. <br /> Un destino ideal para quienes buscan surfear en México con alma y constancia.',
						title: 'Surf',
					},
					{
						id: 2,
						cover: './img/experiencias/2.jpg?v=1',
						description:
							'Mar, arena y libertad en movimiento. <br /> Una manera natural de recorrer la costa y contemplar el Pacífico al ritmo de cada paso. ',
						title: 'Paseo a Caballo a la orilla del mar',
					},
					{
						id: 3,
						cover: './img/experiencias/3.jpg?v=1',
						description:
							'Cuerpo cálido, mente en silencio. <br /> Un ritual natural para relajarse y reconectar con la tierra desde lo más profundo.',
						title: 'Aguas termales',
					},
					{
						id: 4,
						cover: './img/experiencias/4.jpg?v=1',
						description:
							'Ritmo, remos y horizonte. <br /> Una forma ligera de conectar con el mar desde su propia superficie.',
						title: 'Paseo en kayak',
					},
					{
						id: 5,
						cover: './img/experiencias/5.jpg?v=1',
						description:
							'Beats suaves, cielo abierto y pies descalzos. <br /> Noches para fluir entre ritmos, brisa marina y una atmósfera sin pretensiones',
						title: 'Música en vivo',
					},
				]}
			/>
		</Container>
	)
}

export default ExperienceGallery
