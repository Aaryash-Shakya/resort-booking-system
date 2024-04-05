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

	static async findBooking(data: { bookingId: number }): Promise<AxiosResponse> {
		return axios
			.get(`${serverUrl}/bookings/${data.bookingId}`, {
				headers: {
					"Content-Type": "application/json",
				},
			})
			.then(response => {
				// console.log(response.status, response.data.message);
				return response;
			})
			.catch(error => {
				console.error("Error occurred in find booking: ", error.status, error.response.data.message);
				return error.response;
			});
	}
}
