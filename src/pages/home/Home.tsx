import LandingLayout from '../../layouts/landing';
import Services from './sections/services';
import Portfolio from './sections/portfolio';
// TODO: fetch from CMS API
import { projects, services } from './data';

const Home = () => {
    return (
        <LandingLayout>
            <Services services={services} />
            <Portfolio portfolios={projects} />
        </LandingLayout>
    );
};

export default Home;
