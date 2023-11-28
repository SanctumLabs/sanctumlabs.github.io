declare type Service = {
    icon: string;
    variant: string;
    title: string;
    description: string;
};

declare type Project = {
    title: string;
    description: string;
    image: string;
}

declare type Client = {
    title: string;
    link: string;
    icon: string;
}

declare type Faq = {
    question: string;
    answer: string;
}

declare type Tag = {
    id: string;
    name: string;
}

declare type Post = {
    id: string;
    image: {
        url: string;
        alt: string;
    };
    tag: { variant: string; value: string };
    title: string;
    description?: string;
    slug: string;
    postedBy?: {
        avatar: string;
        name: string;
    };
    postedOn?: {
        date: string;
        time: string;
    };
    overlay?: string;
    groupAvatars?: string[];
}
