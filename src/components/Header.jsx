import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { images } from "../assets/images/index.js";
import {
	faBars,
	faCartShopping,
	faMagnifyingGlass,
	faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const Header = () => {
	const [isMenu, setIsMenu] = useState(false);

	const topBarsRef = useRef(null);
	const topMenuRef = useRef(null);

	const handleClickOutside = (e) => {
		if (topBarsRef.current && topBarsRef.current.contains(e.target)) {
			topMenuRef.current.classList.toggle("ct-topMenu-expanded");
			topMenuRef.current.classList.toggle("hidden");
		} else {
			if (topMenuRef.current.classList.contains("ct-topMenu-expanded")) {
				topMenuRef.current.classList.remove("ct-topMenu-expanded");
				topMenuRef.current.classList.add("hidden");
			}
		}
	};

	useEffect(() => {
		document.addEventListener("click", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);

	return (
		<div className="w-full border-b-[1px]">
			<div className="max-w-[1120px] mx-6 md:mx-12 xl:mx-auto flex justify-between items-center gap-6 py-4 relative">
				{/*Logo and side bars */}
				<div className="flex items-center gap-6">
					{/* Side bars */}
					<div
						ref={topBarsRef}
						className="icon-default md:hidden"
						onClick={() => setIsMenu(!isMenu)}
					>
						<FontAwesomeIcon icon={faBars} />
					</div>

					{/* Logo */}
					<div
						className="bg-no-repeat bg-center h-[24px] w-[66px] cursor-pointer"
						style={{ backgroundImage: `url(${images.logo})` }}
					></div>
				</div>

				{/* Search */}
				<div className="hidden px-4 py-2 lg:flex items-center gap-2 bg-[#F5F5F5] rounded-lg max-w-[440px] flex-1">
					<div className="flex items-center">
						<FontAwesomeIcon
							className="text-2xl text-[#989898] hover:text-[#656565] cursor-pointer"
							icon={faMagnifyingGlass}
						/>
					</div>

					<div className="flex-1">
						<input
							className="w-full py-1 px-2 bg-inherit text-basis text-black font-medium outline-none focus:bg-white border border-transparent focus:border focus:border-[#989898] rounded"
							type="text"
							placeholder="Search"
						/>
					</div>
				</div>

				{/* Menu */}
				<ul ref={topMenuRef} className="hidden md:flex gap-[52px]">
					<li className="ct-menu-li">
						<Link to="">Home</Link>
					</li>
					<li className="ct-menu-li">
						<Link to="">About</Link>
					</li>
					<li className="ct-menu-li">
						<Link to="">Contact Us</Link>
					</li>
					<li className="ct-menu-li">
						<Link to="">Blog</Link>
					</li>
				</ul>

				{/* Navigation */}
				<div className="flex gap-6">
					<div>
						<FontAwesomeIcon
							className="icon-default"
							icon={faHeart}
						/>
					</div>
					<div>
						<FontAwesomeIcon
							className="icon-default"
							icon={faCartShopping}
						/>
					</div>
					<div>
						<FontAwesomeIcon
							className="icon-default"
							icon={faUser}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
