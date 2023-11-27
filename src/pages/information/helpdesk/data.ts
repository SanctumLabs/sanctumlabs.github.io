const helpLinks: FaqHelpLink[] = [
    {
        icon: 'terminal',
        title: 'Getting started',
        links: ['General information', 'Signup help', 'Preparing the documents'],
        link: '/terminal'
    },
    {
        icon: 'user',
        title: 'Managing my account',
        links: ['Account information', 'Identity verification', 'Linking a paymeny method'],
        link: '/user'
    },
    {
        icon: 'git-merge',
        title: 'API & Integrations',
        links: ['Rest API Integrations', 'API SDKs', 'Embed scripts'],
        link: '/git-merge'
    },
];

const faqs: Faq[] = [
    {
        question: 'Can I use this template for my client?',
        answer: ' Yup, the marketplace license allows you to use this theme in any end products.For more information on licenses, please refere license terms on marketplace.',
    },
    {
        question: 'How do I get help with the theme?',
        answer: 'Use our dedicated support email (support@coderthemes.com) to send your issues or feedback.We are here to help anytime.',
    },
    {
        question: 'Will you regularly give updates?',
        answer: 'Yes, We will update regularly. All the future updates would be available without any cost.',
    },
]

export { helpLinks, faqs };