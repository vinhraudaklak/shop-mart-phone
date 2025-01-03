import CartBanner from "./CartBanner";
import { images } from "../assets/images";

const BannerProducts = [
	{
		id: 1,
		title: "Popular Products",
		color: "white",
		img: `${images.appleWatch2}`,
		description:
			"iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
	},
	{
		id: 2,
		title: "Ipad Pro",
		color: "#F9F9F9",
		img: `${images.ipad}`,
		description:
			"iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
	},
	{
		id: 3,
		title: "Samsung Galaxy ",
		color: "#EAEAEA",
		img: `${images.phone2}`,
		description:
			"iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
	},
	{
		id: 4,
		title: "Macbook Pro",
		color: "#2C2C2C",
		img: `${images.macbook}`,
		description:
			"iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
	},
];

const BannerBottom = () => {
	return (
		<div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  ">
			{BannerProducts.map((product) => (
				<CartBanner key={product.id} product={product} />
			))}
		</div>
	);
};

export default BannerBottom;
