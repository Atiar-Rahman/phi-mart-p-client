
import HeroCarousel from '../components/Home/Carosuel/HeroCarousel';
import Category from '../components/Home/Categories/Category';
import DiscountSection from '../components/Home/Discount/DiscountSection';
import Features from '../components/Home/Features'
import Products from './Products';

const Home = () => {
    return (
        <div>
            <HeroCarousel></HeroCarousel>
            <Features></Features>
            <Category></Category>
            <Products></Products>
            <DiscountSection></DiscountSection>
        </div>
    );
};

export default Home;