import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { GoXCircleFill } from "react-icons/go";
import { RoomApi } from "../apis/roomApi";

type RoomsType = {
	id: number;
	name: string;
	description: string;
	price: number;
	capacity: number;
	status: string;
	type: "deluxe" | "family" | "standard"; // Define the possible room types
	top: string;
	left: string;
	createdAt: string;
	updatedAt: string;
	deletedAt: string | null;
};

const ViewRoom: React.FC = () => {
	const [rooms, setRooms] = useState<RoomsType[]>([]);
	const [errorMessage, setErrorMessage] = useState<string>("");
	const [successMessage, setSuccessMessage] = useState<string>("");

	useEffect(() => {
		fetchRooms();
	}, []);

	const fetchRooms = async () => {
		try {
			const res = await RoomApi.getAllRooms();
			console.log(res.data);
			if (res.status !== 200) {
				setErrorMessage("Error fetching events");
				setSuccessMessage("");
				throw new Error("Error fetching events");
			}

			setRooms(res.data.data);
			console.log(rooms);
		} catch (err) {
			console.log(err);
		}
	};

	const mapRoomsRow = (rooms: RoomsType[]) => {
		return rooms.map((room, key) => {
			return (
				<tr className="hover:backdrop-brightness-95 text-lg" key={room.id}>
					<td>
						<div className="font-bold">{key + 1}</div>
					</td>
					<td>
						<div className="font-bold">{room.name}</div>
					</td>
					<td>
						<div className="font-bold">{room.capacity}</div>
					</td>
					<td>
						<div className="flex items-center gap-3">
							<div className="font-bold">{room.type}</div>
						</div>
					</td>
					<td>
						<div className="flex items-center gap-3">
							<div className="font-bold">{room.price}</div>
						</div>
					</td>
				</tr>
			);
		});
	};

	const showErrorMessage = () => {
		return errorMessage !== "" ? (
			<>
				<div role="alert" className="alert alert-error">
					<GoXCircleFill />
					<span>{errorMessage}</span>
				</div>
			</>
		) : (
			""
		);
	};

	const showSuccessMessage = () => {
		return successMessage !== "" ? (
			<>
				<div role="alert" className="alert alert-success">
					<FaCheckCircle />
					<span>{successMessage}</span>
				</div>
			</>
		) : (
			""
		);
	};
	return (
		<>
			<div className="w-full p-4 nav-margin ps-24">
				<div className="overflow-x-auto border border-white">
					{showSuccessMessage()}
					{showErrorMessage()}
					<table className="table">
						{/* head */}
						<thead className="text-lg text-base-content bg-base-200">
							<tr>
								<th>S.N.</th>
								<th>Room Name</th>
								<th>Capacity</th>
								<th>Type</th>
								<th>Price</th>
							</tr>
						</thead>
						<tbody>{mapRoomsRow(rooms)}</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default ViewRoom;
