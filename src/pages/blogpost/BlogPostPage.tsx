import { FC } from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from 'layouts/main';
import BlogPostHeader from './BlogHeader';

import img1 from 'assets/images/avatars/img-4.jpg';

const BlogPostPage = () => {
    const { slug, id } = useParams();

    // TODO: fetch data from API
    const data = {
        title: 'Announcing the free upgrade for the subscribed plans',
        tag: {
            id: '1',
            name: 'Announcement',
            slug: 'announcement',
        },
        author: {
            avatarUrl: img1,
            name: 'Emily Blunt',
        },
        publishedOn: '11 Mar, 2020',
        readingTime: '3 min read',
    };

    return (
        <MainLayout
            hero={
                <BlogPostHeader
                    slug={slug || ''}
                    title={data.title}
                    tag={data.tag}
                    author={data.author}
                    publishedOn={data.publishedOn}
                    readingTime={data.readingTime}
                />
            }>
            <></>
        </MainLayout>
    );
};

export default BlogPostPage;
