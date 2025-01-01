import CartProduct from "./CartProduct"

const SectionProducts = () => {
  return (
    <div className="container-default mx-6 md:mx-12 xl:mx-auto py-14">
      {/* Title top */}
      <div className="flex gap-6 text-lg font-medium text-[#8B8B8B] leading-8 tracking-wide">
        <div className="action-line-bottom action-selected">New Arrival</div>
        <div className="action-line-bottom">Bestseller</div>
        <div className="action-line-bottom">Featured Products</div>
      </div>
      {/* Container product */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4">
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
      </div>
    </div>
  )
}

export default SectionProducts