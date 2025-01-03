import { Link } from "react-router-dom";

const CartBanner = ({ product }) => {
	return (
		<div
			className="px-8 flex flex-col"
			style={{ backgroundColor: `${product.color}` }}
		>
			<div
				className="min-h-[360px] bg-no-repeat bg-center"
				style={{ backgroundImage: `url(${product.img})` }}
			></div>

			{/* container */}
			<div className="flex flex-col flex-1 justify-between gap-4 items-center sm:items-start pb-14">
				<h3
					className="text-[33px] font-light leading-[48px]"
					style={{ color: product.id === 4 ? "white" : "inherit" }}
				>
					{product.title}
				</h3>

				<div className="flex flex-col items-center sm:items-start gap-4">
					<p className="text-[#909090] leading-6 tracking-wide mx-8 sm:mx-0 text-center sm:text-left">
						{product.description}
					</p>

					<Link>
						<button
							className="button-default bg-inherit py-4 px-28 sm:px-14 border-black hover:bg-gray-300 hover:bg-opacity-40"
							style={{
								fontSize: "16px",
								...(product.id === 4 && {
									color: "white",
									borderColor: "white",
								}),
							}}
						>
							Buy Now
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CartBanner;
