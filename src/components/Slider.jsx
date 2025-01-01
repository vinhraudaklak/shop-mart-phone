import { images } from "../assets/images";
const Slider = () => {
	return (
		<div className="w-full bg-[#211C24]">
			<div className="container-default mx-6 md:mx-12 xl:mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center">
				{/* Content */}
				<div className="basis-7/12 flex flex-col justify-between items-start gap-4 lg:gap-6 pt-16 md:mt-0">
					<h4 className="text-[#FFFFFF] opacity-40 text-base lg:text-xl font-semibold leading-8 ">
						Pro.Beyond.
					</h4>
					<h1 className="text-[#FFFFFF] text-4xl lg:text-8xl font-extralight tracking-[-0.96px]">
						IPhone 14
						<span className="font-semibold"> Pro</span>
					</h1>
					<span className="text-[#909090] lg:text-lg font-medium leading-6 ">
						Created to change everything for the better. For
						everyone
					</span>
					<div className="w-full lg:w-auto">
						<button className="button-default px-14 py-4 w-full mt-4 text-[#FFFFFF] hover:bg-gray-200 hover:text-black ">
							Shop Now
						</button>
					</div>
				</div>

				{/* img */}
				<div className="basis-5/12 w-full sm:w-[65%]">
					<div
						className="min-h-[440px] sm:h-[560px] md:h-[630px] bg-no-repeat bg-cover bg-top"
						style={{ backgroundImage: `url(${images.slider})` }}
					></div>
				</div>
			</div>
		</div>
	);
};

export default Slider;
