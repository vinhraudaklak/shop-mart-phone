import { Link } from "react-router-dom";
import { images } from "../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookF,
	faInstagram,
	faTiktok,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
	return (
		<div className="w-full bg-black">
			<div className="container-default mx-6 md:mx-12 xl:mx-auto py-[104px]">
				{/* navigation */}
				<div className="flex flex-col md:flex-row gap-16 md:gap-8 justify-between text-center md:text-left">
					<div className="basis-4/12">
						<div
							className="bg-no-repeat bg-center h-[24px] w-full md:w-[66px] cursor-pointer"
							style={{
								backgroundImage: `url(${images.logoWhite})`,
							}}
						></div>
						<div className="text-[#CFCFCF] text-sm leading-6 font-medium mt-8">
							We are a residential interior design firm located in
							Portland. Our boutique-studio offers more than
						</div>
					</div>

					<div className="basis-7/12 flex flex-col md:flex-row justify-between gap-16 md:gap-8">
						{/* List services */}
						<div className="flex-1">
							<h3 className="text-white font-bold tracking-wide">
								Services
							</h3>
							<ul className=" mt-2">
								<li className="text-footer-style">
									<Link>Bonus program</Link>
								</li>
								<li className="text-footer-style">
									<Link>Gift cards</Link>
								</li>
								<li className="text-footer-style">
									<Link>Credit and payment</Link>
								</li>
								<li className="text-footer-style">
									<Link>Service contracts</Link>
								</li>
								<li className="text-footer-style">
									<Link>Non-cash account</Link>
								</li>
								<li className="text-footer-style">
									<Link>Payment</Link>
								</li>
							</ul>
						</div>

						{/* list Assis... */}
						<div className="flex-1">
							<h3 className="text-white font-bold tracking-wide">
								Assistance to the buyer
							</h3>

							<ul className="mt-2">
								<li className="text-footer-style">
									<Link>Find an order</Link>
								</li>
								<li className="text-footer-style">
									<Link>Terms of deliverys</Link>
								</li>
								<li className="text-footer-style">
									<Link>Exchange and return of goods</Link>
								</li>
								<li className="text-footer-style">
									<Link>Guarantee</Link>
								</li>
								<li className="text-footer-style">
									<Link>Frequently asked questions</Link>
								</li>
								<li className="text-footer-style">
									<Link>Terms of use of the site</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>

				{/* Icon link */}
				<div className="mt-6 flex justify-center md:justify-start gap-8" >
					<Link>
						<FontAwesomeIcon
							className="text-white px-2"
							icon={faTwitter}
						/>
					</Link>
					<Link>
						<FontAwesomeIcon
							className="text-white px-2"
							icon={faFacebookF}
						/>
					</Link>
					<Link>
						<FontAwesomeIcon
							className="text-white px-2"
							icon={faTiktok}
						/>
					</Link>
					<Link>
						<FontAwesomeIcon
							className="text-white px-2"
							icon={faInstagram}
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;
