import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { GoXCircleFill } from "react-icons/go";
import { UserApi } from "../apis/userApi";

type UserType = {
	id: number;
	name: string;
	email: string;
	password: string;
	phone: string;
	role: string;
	isVerified: boolean;
	createdAt: string;
	updatedAt: string;
	deletedAt: string | null;
};

const ManageUsers: React.FC = () => {
	const [users, setUsers] = useState<UserType[]>([]);
	const [errorMessage, setErrorMessage] = useState<string>("");
	const [successMessage, setSuccessMessage] = useState<string>("");

	useEffect(() => {
		fetchUsers();
	}, []);

	const fetchUsers = async () => {
		try {
			const res = await UserApi.findAll();
			if (res.status !== 200) {
				setErrorMessage("Error fetching events");
				setSuccessMessage("");
				throw new Error("Error fetching events");
			}

			setUsers(res.data.data);
			console.log(users);
		} catch (err) {
			console.log(err);
		}
	};

	const mapUsersRow = (users: UserType[]) => {
		return users.map((user, key) => {
			return (
				<tr className={`hover:backdrop-brightness-95 text-lg ${key%2 == 0 }`} key={user.id}>
					<td>
						<div className="font-bold">{key + 1}</div>
					</td>
					<td>
						<div className="font-bold">{user.id}</div>
					</td>
					<td>
						<div className="font-bold">{user.name}</div>
					</td>
					<td>
						<div className="flex items-center gap-3">
							<div className="font-bold">{user.email}</div>
						</div>
					</td>
					<td>
						<div className="flex items-center gap-3">
							<div className="font-bold">{user.phone}</div>
						</div>
					</td>
					<td>
						<div className="flex items-center gap-3">
							<div className="font-bold">{user.role}</div>
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
			<div className="container w-full p-4 nav-margin ps-24">
				<div className="overflow-x-auto border border-white shadow-lg">
					{showSuccessMessage()}
					{showErrorMessage()}
					<table className="table table-zebra">
						{/* head */}
						<thead className="text-lg text-base-content bg-custom-bg-dark border-b-2 border-b-white">
							<tr>
								<th>S.N.</th>
								<th>User ID</th>
								<th>Name</th>
								<th>Email</th>
								<th>Phone</th>
								<th>Role</th>
							</tr>
						</thead>
						<tbody>{mapUsersRow(users)}</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default ManageUsers;
