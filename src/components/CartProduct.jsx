import { faHeart } from "@fortawesome/free-regular-svg-icons";
// import { faHeart as heart2 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { images } from "../assets/images";

const CartProduct = () => {
	return (
		<div className="py-6 px-4 rounded-[9px] flex flex-col gap-4 min-w-[236px] min-h-[384px] bg-[#F6F6F6] hover:border-[1px]">
			<div className="flex justify-end">
       {/* Hồi set dk để đổi icon */}
  				<FontAwesomeIcon className="text-2xl text-[#909090C4] py-1 cursor-pointer hover:text-red-600" icon={faHeart} />
          {/* <FontAwesomeIcon icon={heart2} /> */}
			</div>
      {/* img */}
			<div className="flex justify-center">
			  <div
  				className="w-[160px] h-[160px]"
  				style={{ backgroundImage: `url(${images.iphone14})` }}
  			></div>
			</div>
      {/* descriptions */}
      <div className="flex flex-col items-center">
        <h4 className="text-center font-medium leading-6">Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)</h4>
        <span className="mt-4 text-2xl font-semibold tracking-[0.72px]">$900</span>
        <button className="button-default mt-6 text-white bg-black py-3 px-16 hover:bg-gray-200 hover:text-black">Buy Now</button>
      </div>
		</div>
	);
};

export default CartProduct;
