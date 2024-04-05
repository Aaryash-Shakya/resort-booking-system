import axios, { AxiosResponse } from "axios";
import serverUrl from "../config";

export class BookingApi {
	static async rangeSearch(data: { start_date: string; end_date: string }): Promise<AxiosResponse> {
		return axios
			.post(`${serverUrl}/bookings/range`, data, {
				headers: {
					"Content-Type": "application/json",
				},
			})
			.then(response => {
				// console.log(response.status, response.data.message);
				return response;
			})
			.catch(error => {
				console.error("Error occurred in range search: ", error.status, error.response.data.message);
				return error.response;
			});
	}

	static async allBooking(): Promise<AxiosResponse> {
		window.scrollTo({
			top: 0,
			behavior: "smooth", // Optional: Smooth scrolling animation
		});
		return axios
			.get(`${serverUrl}/bookings/all`, {
				headers: {
					"Content-Type": "application/json",
				},
			})
			.then(response => {
				console.log(response.status, response.data.message);
				return response;
			})
			.catch(error => {
				console.error("Error occurred in all booking: ", error.status, error.response.data.message);
				return error.response;
			});
	}

	static async create(data: { roomId: string }): Promise<AxiosResponse> {
		return axios
			.post(
				`${serverUrl}/bookings/create/${localStorage.getItem("userId")}`,
				{
					start_date: sessionStorage.getItem("startDate"),
					end_date: sessionStorage.getItem("endDate"),
					extras: "Nothing",
					roomId: data.roomId,
				},
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			)
			.then(response => {
				console.log(response.status, response.data.message);
				return response;
			})
			.catch(error => {
				console.error("Error occurred in create booking: ", error.status, error.response.data.message);
				return error.response;
			});
	}
}
