import IMGBanner from '@assets/img/dummy.jpg'
import Banner from '@components/Banner'
import Info from '@pages/rooms/Info'
import Room from '@pages/rooms/Room'
import SpecialOffers from '@pages/rooms/SpecialOffers'

import roomsData from '@assets/data/rooms.json'

const Rooms = () => {
	return (
		<>
			<Banner
				cover={IMGBanner}
				includeRestHeader={true}
			/>

			<Info />
			<SpecialOffers />

			{roomsData.map((room, index) => (
				<Room
					key={'room_' + index}
					data={room}
				/>
			))}

			<div className='pb-16'></div>
		</>
	)
}

export default Rooms
