import Layout from "../components/Layout/Layout";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import SectionProducts from "../components/SectionProducts";
import BannerBottom from "../components/BannerBottom";
import ProductsDiscount from "../components/ProductsDiscount";
const Home = () => {
	return (
		<Layout>
			<Slider />
			<Categories />
			<SectionProducts />
			<BannerBottom />
			<ProductsDiscount />
		</Layout>
	);
};

export default Home;
