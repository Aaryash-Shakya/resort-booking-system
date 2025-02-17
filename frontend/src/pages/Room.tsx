import React from "react";
import Map from "../components/map/Map";
import RoomDetails from "../components/room/RoomDetails";
import ReactTailwindcssDatePicker from "../components/room/ReactTailwindcssDatepicker";

const Room: React.FC = () => {
	return (
		<>
			<div className="md:container flex flex-col md:flex-row">
				<div className="map-container w-full h-fit md:w-1/2">
					<Map image={"../../public/map/resort-map-photoshop-dull-copy.png"} alt={"resort map"} />
					<ReactTailwindcssDatePicker />
				</div>
				<div className="room-details w-full md:w-1/2 md:mx-4 mb-4 overflow-hidden bg-custom-bg-light text-black">
					<div className="flex flex-col">
						<RoomDetails />
					</div>
				</div>
			</div>
		</>
	);
};

export default Room;
