import Layout from "../../components/Layout/Layout";
import Slider from "../../components/Slider";
import Categories from "../../components/Categories";
import SectionProducts from "../../components/SectionProducts";
import BannerBottom from "../../components/BannerBottom";
const Home = () => {
	return (
		<Layout>
			<Slider />
			<Categories />
			<SectionProducts />
			<BannerBottom />
		</Layout>
	);
};

export default Home;
