// import axios from 'axios';
import React, { useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
// import { useRoomStore } from '../store/useRoomStore';
import { RoomApi } from "../apis/roomApi";
import { FaBath, FaBed, FaHome } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { TbRulerMeasure } from "react-icons/tb";
import { useParams } from "react-router-dom";
import axios from "axios";
import serverUrl from "../config";

const Payment: React.FC = () => {
	const roomId = useParams().roomId;
	const userId = localStorage.getItem("userId");
	// const roomId = useRoomStore(state => state.selectedRoom);
	const [roomDetails, setRoomDetails] = React.useState<RoomType>({
		id: 0,
		name: "",
		type: "standard",
		top: "",
		left: "",
		status: "available",
		description: "",
		price: 0,
		capacity: 0,
		createdAt: "",
		updatedAt: "",
		deletedAt: null,
	});

	useEffect(() => {
		const fetchRoomDetails = async () => {
			const response = await RoomApi.getRoomDetails({ id: Number(roomId) });
			setRoomDetails(response.data.data);
		};
		fetchRoomDetails();
	}, [roomId]);

	const onToken = (token: any) => {
		console.log(token);
		try {
			axios
				.post(`${serverUrl}/bookings/create/${userId}`, {
					roomId: roomId,
					start_date: sessionStorage.getItem("startDate"),
					end_date: sessionStorage.getItem("endDate"),
				})
				.then(response => {
					console.log(response);
				});
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<section className="nav-margin">
			<div className="p-4 pb-0 lg:px-10 max-w-screen-lg mx-auto bg-custom-bg-light">
				{/* heading */}
				<h2 className=" text-black text-4xl font-bold">
					{roomId} {roomDetails.name}
				</h2>
				{/* room features */}
				<div className="features flex flex-col border m-4 md:mx-10 lg:mx-4 xl:mx-10 gap-7 p-3 rounded-xl text-gray-700 border-slate-300">
					<div className="row flex-evenly">
						<div className="feature flex-center flex-col">
							<FaHome className="text-2xl" />
							<p>Type</p>
							<p className="text-black text-lg">{roomDetails.type}</p>
						</div>
						<div className="feature flex-center flex-col">
							<MdGroups className="text-2xl" />
							<p>Capacity</p>
							<p className="text-black text-lg">{roomDetails.capacity}</p>
						</div>
						<div className="feature flex-center flex-col">
							<IoMdTime className="text-2xl" />
							<p>Check In</p>
							<p className="text-black text-lg">10 am</p>
						</div>
					</div>
					<div className="row flex-evenly">
						<div className="feature flex-center flex-col">
							<FaBed className="text-2xl" />
							<p>Bedroom</p>
							<p className="text-black text-lg">{roomDetails.type == "family" ? 3 : 2}</p>
						</div>
						<div className="feature flex-center flex-col">
							<FaBath className="text-2xl" />
							<p>Bathroom</p>
							<p className="text-black text-lg">{roomDetails.capacity}</p>
						</div>
						<div className="feature flex-center flex-col">
							<TbRulerMeasure className="text-2xl" />
							<p>Size</p>
							<p className="text-black text-lg">{roomDetails.type == "deluxe" ? 600 : 400} sqm</p>
						</div>
					</div>
				</div>

				{/* description */}
				<h3 className="text-2xl font-semibold text-black mt-4 mb-2">Description</h3>
				<p className="text-black">{roomDetails.description}</p>

				<div className="book-now flex justify-around items-center bg-custom-bg-dark rounded-t-3xl mt-2 py-2">
					<div className="text-white">
						<p className="font-bold text-xl">RS {roomDetails.price}</p>
						<p>Per Night</p>
					</div>

					{/* payment btn */}
					<StripeCheckout
						amount={roomDetails.price * 100}
						currency="INR"
						token={onToken}
						stripeKey="pk_test_51LUpdxF7nwfGVnxLfgcy3MoW8VU4uGzcMxjeeU27WTxW7Chx83xiLGkSDqVc1E8MAktDnDuFADDRoqLVK1iD8F9w00oGXaILsK"
					>
						<button className="btn text-lg rounded-none text-white border-white hover:border-custom-accent bg-custom-accent hover:bg-custom-bg-dark hover:text-custom-accent font-ostwald">
							Pay Now
						</button>
					</StripeCheckout>
				</div>
			</div>
			{/* book now */}
		</section>
	);
};

export default Payment;
