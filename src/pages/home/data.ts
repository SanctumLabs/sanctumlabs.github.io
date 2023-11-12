import ProjectImg1 from 'assets/images/features/agency1.jpg';
import ProjectImg2 from 'assets/images/features/agency2.jpg';

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


export { services, projects }
