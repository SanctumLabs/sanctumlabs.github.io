// images
import postImg1 from 'assets/images/blog/post1.jpg';
import postImg2 from 'assets/images/blog/post3.jpg';

import avatar1 from 'assets/images/avatars/img-4.jpg';
import avatar2 from 'assets/images/avatars/img-2.jpg';
import avatar3 from 'assets/images/avatars/img-7.jpg';

import crypto1 from 'assets/images/blog/crypto1.jpg';
import crypto2 from 'assets/images/blog/crypto2.jpg';

const posts: Post[] = [
    {
        id: '1',
        slug: 'announcement',
        image: {
            url: postImg1,
            alt: 'announcement'
        },
        tag: { variant: 'orange', value: 'Announcement' },
        title: 'Announcing the free upgrade for the subscribed plans',
        description:
            'We are glad to announce that, we are going to upgrade all the subscribed accounts with the premium features this week...',
        postedBy: {
            avatar: avatar1,
            name: 'Emily Blunt',
        },
        postedOn: {
            date: '11 Mar, 2020',
            time: '3 min read',
        },
    },
    {
        id: '2',
        slug: 'will-web-design-ever-rule-the-world',
        image: {
            alt: 'web-design',
            url: postImg1
        },
        tag: { variant: 'info', value: 'Community' },
        title: 'Will Web Design Ever Rule the World?',
        description:
            'The web is changed in the current era a lot. Many new trends are being used in the market at the moment...',
        postedBy: {
            avatar: avatar2,
            name: 'Greeva N',
        },
        postedOn: {
            date: '9 Mar, 2020',
            time: '5 min read',
        },
    },
    {
        id: '3',
        slug: 'crypto',
        image: {
            url: crypto1,
            alt: 'blazzing-fast-user-interface'
        },
        tag: { variant: 'orange', value: 'Announcement' },
        title: 'Introducing new blazzing fast user interface',
        description:
            'Introducing the blazzing fast user interface. The new UI is fast, secure and most user friendly...',
        postedBy: {
            avatar: avatar2,
            name: 'Greeva N',
        },
        postedOn: {
            date: '11 Mar, 2020',
            time: '3 min read',
        },
    },
    {
        id: '4',
        slug: 'consider-the-prompt',
        image: {
            url: crypto2,
            alt: 'tutorial'
        },
        tag: { variant: 'success', value: 'Tutorial' },
        title: 'What you should know before considering the prompt',
        description:
            'We are giving a pretty extensive guideline and context before you make your decision to consider prompt...',
        postedBy: {
            avatar: avatar2,
            name: 'Greeva N',
        },
        postedOn: {
            date: '11 Mar, 2020',
            time: '3 min read',
        },
    },
    {
        id: '5',
        slug: 'community',
        image: {
            url: crypto1,
            alt: 'community'
        },
        tag: { variant: 'info', value: 'Community' },
        title: 'Your Way to a Successful Sales Campaigns',
        description:
            'Explore a latest guideline for creating a successful online sales campaign using google adwords or facebook ads...',
        postedBy: {
            avatar: avatar2,
            name: 'Greeva N',
        },
        postedOn: {
            date: '11 Mar, 2020',
            time: '3 min read',
        },
    },
    {
        id: '6',
        slug: 'resource',
        image: {
            url: postImg2,
            alt: 'resource'
        },
        tag: { variant: 'danger', value: 'Resource' },
        title: 'Top 10 ideas to improve the team productivity',
        groupAvatars: [avatar3, avatar1, avatar2],
        postedBy: {
            avatar: avatar2,
            name: 'Greeva N',
        },
        postedOn: {
            date: '11 Mar, 2020',
            time: '3 min read',
        },
    },
];


const tags: Tag[] = [
    {
        id: '1',
        name: 'Business'
    },
    {
        id: '2',
        name: 'Community'
    },
    {
        id: '3',
        name: 'Announcement'
    },
    {
        id: '4',
        name: 'Tutorials'
    },
    {
        id: '5',
        name: 'Resources'
    },
    {
        id: '6',
        name: 'Interview'
    },
]

export { tags, posts };
