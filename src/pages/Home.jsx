
import HeroCarousel from '../components/Carosuel/HeroCarousel';
import Features from '../components/Features';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <HeroCarousel></HeroCarousel>
            <Features></Features>
            <Products></Products>
        </div>
    );
};

export default Home;