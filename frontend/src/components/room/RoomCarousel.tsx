import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { imageData } from "./ImageData";

type RoomCarouselProps = {
	type: "deluxe" | "family" | "standard";
};

const RoomCarousel: React.FC<RoomCarouselProps> = ({ type }) => {
	const images = imageData[type];
	return (
		<>
			<Swiper
				pagination={{
					type: "bullets",
					clickable: true,
				}}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				navigation={true}
				modules={[Pagination, Navigation, Autoplay]}
				className="mySwiper"
			>
				<SwiperSlide>
					<div className="img-container max-h-96 w-full overflow-hidden">
						<img src={images[0]} alt="" className="h-full image-full" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="img-container max-h-96 w-full overflow-hidden">
						<img src={images[1]} alt="" className="h-full image-full" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="img-container max-h-96 w-full overflow-hidden">
						<img src={images[2]} alt="" className="h-full image-full" />
					</div>
				</SwiperSlide>
			</Swiper>
		</>
	);
};
export default RoomCarousel;
