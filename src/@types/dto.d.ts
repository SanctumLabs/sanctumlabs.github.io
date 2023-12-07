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
    slug: string;
}

declare type Image = {
    url: string;
    alt: string;
    caption?: string;
}

declare type PostAuthor = {
    avatarUrl: string;
    name: string;
    slug: string;
}

declare type Post = {
    id: string;
    image: Image;
    tag: { variant: string; value: string };
    title: string;
    description?: string;
    slug: string;
    postedBy?: PostAuthor;
    postedOn?: {
        date: string;
        time: string;
    };
    overlay?: string;
    groupAvatars?: string[];
}

declare type GalleryItemType = {
    id?: number;
    image: Image;
}
