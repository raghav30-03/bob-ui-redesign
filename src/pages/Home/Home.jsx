import Navbar from "../../components/Common/Navbar/Navbar";
import Hero from "../../components/Home/Hero/Hero";
import ProductsPreview from "../../components/Home/ProductsPreview/ProductsPreview";
import Security from "../../components/Home/Security/Security";
import DownloadApp from "../../components/Home/DownloadApp/DownloadApp";
import Footer from "../../components/Common/Footer/Footer";

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <ProductsPreview />
            <Security />
            <DownloadApp />
            <Footer />
        </>
    );
};

export default Home;