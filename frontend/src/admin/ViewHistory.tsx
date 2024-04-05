import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { GoXCircleFill } from "react-icons/go";
import { roomData } from "../components/map/mapData";
import { BookingApi } from "../apis/bookingApi";
import { useRoomStore } from "../store/useRoomStore";

type UserBookingsType = {
	id: number;
	start_date: string;
	end_date: string;
	extras: string;
	userId: number;
	roomId: number;
	status: string;
	createdAt: string;
	updatedAt: string;
};

const ViewHistory: React.FC = () => {
	const user_id = localStorage.getItem("userId") || "1";
	const navigate = useNavigate();
	const [userBookings, setUserBookings] = useState<UserBookingsType[]>([]);
	const [errorMessage, setErrorMessage] = useState<string>("");
	const [successMessage, setSuccessMessage] = useState<string>("");

	useEffect(() => {
		fetchBookings();
	}, []);

	const fetchBookings = async () => {
		try {
			const res = await BookingApi.allBooking();
			console.log(res.data);
			if (res.status !== 200) {
				setErrorMessage("Error fetching events");
				setSuccessMessage("");
				throw new Error("Error fetching events");
			}

			setUserBookings(res.data.data);
			console.log(userBookings);
		} catch (err) {
			console.log(err);
		}
	};

	const mapBookingsRow = (userBookings: UserBookingsType[]) => {
		return userBookings.map((booking, key) => {
			console.log(booking.userId, user_id);
			if (booking.userId == parseInt(user_id)) {
				return (
					<tr className="hover:backdrop-brightness-95 text-lg" key={booking.id}>
						<td>
							<div className="font-bold">{key + 1}</div>
						</td>
						<td>
							<div className="font-bold">{booking.userId}</div>
						</td>
						<td>
							<div className="font-bold">{roomData[booking.roomId + 1].name}</div>
						</td>
						<td>
							<div className="flex items-center gap-3">
								<div className="font-bold">{booking.start_date}</div>
							</div>
						</td>
						<td>
							<div className="flex items-center gap-3">
								<div className="font-bold">{booking.end_date}</div>
							</div>
						</td>
						<td>
							<button
								className="btn-custom-accent"
								onClick={() => {
									useRoomStore.setState({ selectedRoom: booking.roomId });
									navigate(`/rooms`);
								}}
							>
								details
							</button>
						</td>
					</tr>
				);
			}
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
								<th>User ID</th>
								<th>Room Name</th>
								<th>Check In</th>
								<th>Check Out</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>{mapBookingsRow(userBookings)}</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default ViewHistory;
