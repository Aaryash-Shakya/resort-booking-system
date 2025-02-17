import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Room from "./pages/Room";
// import Book from "./pages/Book";
import Signup from "./pages/SignUp";
import FixedNavLayout from "./layouts/FixedNavLayout";
import BasicLayout from "./layouts/BasicLayout";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import VerifyEmail from "./pages/VerifyEmail";
import Profile from "./pages/Profile";
import PrivateRoute from "./auth/PrivateRoute";
import Unauthorized from "./pages/Unauthorized";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import Contact from "./pages/Contact";
import About from "./components/home/About";
import AdminRoute from "./auth/AdminRoute";
import AdminSidebar from "./admin/AdminSidebar";
import Payment from "./pages/Payment";

const MyRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="" element={<BasicLayout />}>
					<Route index element={<Home />} />
					<Route path="/rooms" element={<Room />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					{/* <Route path="/book" element={<Book />} /> */}
				</Route>
				<Route path="" element={<FixedNavLayout />}>
					<Route path="/signup" element={<Signup />} />
					<Route path="/login" element={<Login />} />
					<Route path="/verify-email/:email" element={<VerifyEmail />} />
					<Route path="/forgot-password" element={<ForgotPassword />} />
					<Route path="/reset-password" element={<ResetPassword />} />
				</Route>
				{/* private route */}
				<Route path="" element={<PrivateRoute />}>
					<Route path="/profile" element={<Profile />} />
				</Route>
				{/* admin route */}
				<Route path="/admin" element={<AdminRoute />}>
					<Route path="dashboard" element={<AdminSidebar />} />
				</Route>
				{/* exceptions */}
				<Route path="/payment" element={<Payment />} />
				<Route path="*" element={<PageNotFound />} />
				<Route path="/unauthorized" element={<Unauthorized />} />
			</Routes>
		</BrowserRouter>
	);
};

export default MyRoutes;
