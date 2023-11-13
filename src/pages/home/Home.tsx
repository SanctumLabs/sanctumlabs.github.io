import LandingLayout from '../../layouts/landing';
import Services from './sections/services';
import Portfolio from './sections/portfolio';
import Clients from './sections/clients';
// TODO: fetch from CMS API
import { projects, services, clients } from './data';

const Home = () => {
    return (
        <LandingLayout>
            <Services services={services} />
            <Portfolio portfolios={projects} />
            <Clients brands={clients} />
        </LandingLayout>
    );
};

export default Home;
