import Categories from "../../components/Categories";
import Layout from "../../components/Layout/Layout";
import SectionProducts from "../../components/SectionProducts";
import Slider from "../../components/Slider";
const Home = () => {
	return (
		<Layout>
			<Slider />
			<Categories />
			<SectionProducts />
		</Layout>
	);
};

export default Home;
