/*
family brown 10
standard orange 4
deluxe yellow 3
activities red 2
*/

type roomDataType = {
	id: number;
	type: "deluxe" | "family" | "standard";
	top: string;
	left: string;
	status: "booked" | "available" | "cleaning" | "maintenance";
	name: string;
};

export const roomData: roomDataType[] = [
	{
		id: 1,
		name: "Lakeside Retreat A",
		type: "deluxe",
		top: "31.2%",
		left: "33%",
		status: "available",
	},
	{
		id: 2,
		name: "Lakeside Retreat B",
		type: "deluxe",
		top: "31.9%",
		left: "41.3%",
		status: "available",
	},
	{
		id: 3,
		name: "Lakeside Retreat C",
		type: "deluxe",
		top: "34.1%",
		left: "50.1%",
		status: "available",
	},
	{
		id: 4,
		name :"Family Escape A",
		type: "family",
		top: "43.6%",
		left: "33.9%",
		status: "available",
	},
	{
		id: 5,
		name :"Family Escape B",
		type: "family",
		top: "44.5%",
		left: "40.1%",
		status: "available",
	},
	{
		id: 6,
		name :"Family Escape C",
		type: "family",
		top: "45%",
		left: "47.2%",
		status: "booked",
	},
	{
		id: 7,
		name :"Family Escape D",
		type: "family",
		top: "44.8%",
		left: "54.9%",
		status: "booked",
	},
	{
		id: 8,
		name :"Family Escape E",
		type: "family",
		top: "36.1%",
		left: "59.6%",
		status: "booked",
	},
	{
		id: 9,
		name :"Family Escape F",
		type: "family",
		top: "33.2%",
		left: "65.1%",
		status: "booked",
	},
	{
		id: 10,
		name :"Family Escape G",
		type: "family",
		top: "31.1%",
		left: "78.6%",
		status: "booked",
	},
	{
		id: 11,
		name :"Family Escape H",
		type: "family",
		top: "29.7%",
		left: "85.2%",
		status: "booked",
	},
	{
		id: 12,
		name :"Family Escape I",
		type: "family",
		top: "40.1%",
		left: "89.4%",
		status: "cleaning",
	},
	{
		id: 13,
		name :"Family Escape J",
		type: "family",
		top: "47.1%",
		left: "92.8%",
		status: "cleaning",
	},

	// standard
	{
		id: 14,
		name: "Comfort Room A",
		type: "standard",
		top: "60.4%",
		left: "47.8%",
		status: "cleaning",
	},
	{
		id: 15,
		name: "Comfort Room B",
		type: "standard",
		top: "59.7%",
		left: "59.3%",
		status: "cleaning",
	},
	{
		id: 16,
		name: "Comfort Room C",
		type: "standard",
		top: "55.9%",
		left: "66.7%",
		status: "cleaning",
	},
	{
		id: 17,
		name: "Comfort Room D",
		type: "standard",
		top: "49.6%",
		left: "72.7%",
		status: "maintenance",
	},
];
