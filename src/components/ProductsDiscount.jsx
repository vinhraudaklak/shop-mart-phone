import CartProduct from "./CartProduct";
const ProductsDiscount = () => {
	return (
		<div className="w-full">
			<div className="container-default py-40 mx-6 md:mx-12 xl:mx-auto ">
				<div className="text-2xl font-medium leading-8 tracking-wide">Discounts up to -50%</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4 mt-8">
          <CartProduct/>
          <CartProduct/>
          <CartProduct/>
          <CartProduct/>
        </div>
			</div>
		</div>
	);
};

export default ProductsDiscount;
