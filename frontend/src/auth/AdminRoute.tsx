import React, { useEffect, useState } from "react";
import { isAuthenticated } from "./authIndex";
import { Navigate, Outlet } from "react-router-dom";
import { VscLoading } from "react-icons/vsc";
import Navbar from "../components/Navbar";
import AdminSidebar from "../admin/AdminSidebar";

const AdminRoute: React.FC = () => {
	const [isAuthorized, setIsAuthorized] = useState<boolean | "guest" | "admin" | null>(null);

	useEffect(() => {
		const checkAuthorization = async () => {
			try {
				const val = await isAuthenticated();
				setIsAuthorized(val);
			} catch (err) {
				console.log(err);
				setIsAuthorized(false);
			}
		};

		checkAuthorization();
	}, []);

	if (isAuthorized === null) {
		return (
			<>
				Loading <VscLoading />
			</>
		);
	} else if (isAuthorized !== "admin") {
		console.log("unauthorized");
		return <Navigate to="/unauthorized" />;
	}

	console.log("authorized " + isAuthorized);
	return (
		<>
			<Navbar positionFixed={true} />
			<Outlet />
			<AdminSidebar />
		</>
	);
};

export default AdminRoute;
