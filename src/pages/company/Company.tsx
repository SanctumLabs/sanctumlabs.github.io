import LandingLayout from "layouts/landing"
import CompanyHero, { Hero } from "./sections/hero";
// images

// TODO: fetch from CMS API
import coworking from 'assets/images/hero/coworking2.jpg';

const Company = () => {
    return (
        <LandingLayout hero={
            <CompanyHero 
                title={<Hero.Title />}
                description={<Hero.Description />}
                button={<Hero.Button text="Let's Have Talk" />}
                imageUrl={coworking}
            />
        }>
            
        </LandingLayout>
    )
}

export default Company;
