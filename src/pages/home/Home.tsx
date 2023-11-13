import LandingLayout from '../../layouts/landing';
import Services from './sections/services';
import Portfolio from './sections/portfolio';
import Clients from './sections/clients';
// TODO: fetch from CMS API
import { projects, services, clients, blogPosts } from './data';
import Blog from './sections/blog';

const Home = () => {
    return (
        <LandingLayout>
            <Services services={services} />
            <Portfolio portfolios={projects} />
            <Clients brands={clients} />
            <Blog blogs={blogPosts} />
        </LandingLayout>
    );
};

export default Home;
