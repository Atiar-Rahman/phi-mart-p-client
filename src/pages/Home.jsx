
import HeroCarousel from '../components/Carosuel/HeroCarousel';
import Category from '../components/Categories/Category';
import DiscountSection from '../components/Discount/DiscountSection';
import Features from '../components/Features';
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