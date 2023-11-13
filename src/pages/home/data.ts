import ProjectImg1 from 'assets/images/features/agency1.jpg';
import ProjectImg2 from 'assets/images/features/agency2.jpg';

// clients
import amazon from 'assets/images/brands/amazon.svg';
import google from 'assets/images/brands/google.svg';
import paypal from 'assets/images/brands/paypal.svg';
import spotify from 'assets/images/brands/spotify.svg';
import shopify from 'assets/images/brands/shopify.svg';

// blogs
import coworking1 from 'assets/images/hero/coworking1.jpg';
import coworking2 from 'assets/images/hero/coworking2.jpg';
import coworking3 from 'assets/images/hero/coworking3.jpg';

const services: Service[] = [
    {
        icon: 'figma',
        variant: 'primary',
        title: 'User Experience Design',
        description:
            'Following the best process that a great design teams use to create products that provide meaningful and relevant experiences to users',
    },
    {
        icon: 'image',
        variant: 'orange',
        title: 'Front End Development',
        description:
            'Development of the websites for businesses of all sizes and shapes and covering a small to enterprise organizations',
    },
    {
        icon: 'hexagon',
        variant: 'success',
        title: 'Brand Identitty Design',
        description:
            'Making a new identities for your brand with an effective collaboration and considered design. We treat your brand like our own',
    },
];

const projects: Project[] = [
    {
        title: 'Project',
        description: 'Branding, Interaction, Web Design',
        image: ProjectImg1,
    },
    {
        title: 'Project 2',
        description: 'Branding, Web Design & Development',
        image: ProjectImg2,
    },
    {
        title: 'Project 3',
        description: 'Branding, Interaction, Web Design',
        image: ProjectImg2,
    },
    {
        title: 'Project 4',
        description: 'Branding, Web Design & Development',
        image: ProjectImg1,
    },
];

const clients: Client[] = [
    {
        title: 'Amazon',
        link: 'https://amazon.com',
        icon: amazon
    },
    {
        title: 'Google',
        link: 'https://google.com',
        icon: google
    },
    {
        title: 'PayPal',
        link: 'https://paypal.com',
        icon: paypal
    },
    {
        title: 'Spotify',
        link: 'https://spotify.com',
        icon: spotify
    },
    {
        title: 'Shopify',
        link: 'https://shopify.com',
        icon: shopify
    },
]

const blogPosts: BlogPost[] = [
    {
        heading: 'Design',
        tag: 'Design',
        img: coworking1,
        time: '11 March, 2020',
        title: 'Top 10 design inspirations to follow',
        description:
            'Single page websites are taking over the world, and thats why I would like you to present the best ...',
        link: '#'
    },
    {
        tag : 'Development',
        heading: 'Development',
        img: coworking2,
        time: '12 March, 2020',
        title: 'Top 10 design inspirations to follow',
        description:
            'We have shortlisted the best WordPress themes for alcohol production, distribution, and selling to...',
        link: '#'
    },
    {
        tag: 'frontend',
        heading: 'Design',
        img: coworking3,
        time: '13 March, 2020',
        title: 'Top 10 design inspirations to follow',
        description: 'The following Italian restaurant WordPress themes come with the powerful drag-n-drop...',
        link: '#'
    },
];

export { services, projects, clients, blogPosts }
