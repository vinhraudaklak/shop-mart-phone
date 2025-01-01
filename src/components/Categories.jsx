import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { images } from "../assets/images";

const Categories = () => {
	return (
		<div className="w-full bg-[#FAFAFA]">
			<div className="container-default mx-6 md:mx-12 xl:mx-auto py-20 flex flex-col gap-8">
				{/* top */}
				<div className="flex justify-between items-center">
					<div className="text-black text-2xl font-medium">
						Browse By Category
					</div>

					<div className="flex justify-between items-center gap-4 leading-8 tracking-[0.24px]">
						<FontAwesomeIcon
							className="icon-default px-2"
							icon={faChevronLeft}
						/>
						<FontAwesomeIcon
							className="icon-default px-2"
							icon={faChevronRight}
						/>
					</div>
				</div>
				{/* bottom */}
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
					<Link>
						<div className="item-category">
							<div>
								<img src={images.phone} alt="" />
							</div>
							<span className="">Phone</span>
						</div>
					</Link>

					<Link>
						<div className="item-category">
							<div>
								<div>
									<img src={images.appleWatch} alt="" />
								</div>
							</div>
							<span className="">Smart Watches</span>
						</div>
					</Link>

					<Link>
						<div className="item-category">
							<div>
								<div>
									<img src={images.camera} alt="" />
								</div>
							</div>
							<span className="">Cameras</span>
						</div>
					</Link>

					<Link>
						<div className="item-category">
							<div>
								<div>
									<img src={images.headPhone} alt="" />
								</div>
							</div>
							<span className="">Headphones</span>
						</div>
					</Link>

					<Link>
						<div className="item-category">
							<div>
								<div>
									<img src={images.computer} alt="" />
								</div>
							</div>
							<span className="">Computers</span>
						</div>
					</Link>

					<Link>
						<div className="item-category">
							<div>
								<div>
									<img src={images.gaming} alt="" />
								</div>
							</div>
							<span className="">Gaming</span>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Categories;
