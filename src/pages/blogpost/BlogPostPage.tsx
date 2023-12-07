import { useParams } from 'react-router-dom';
import MainLayout from 'layouts/main';
import BlogPostHeader from './BlogHeader';

import img1 from 'assets/images/avatars/img-4.jpg';
import img2 from 'assets/images/avatars/img-2.jpg';
import PostContent from './PostContent';
import PostNavigation from './PostNavigation';

// images
import post1 from 'assets/images/blog/post1.jpg';
import post2 from 'assets/images/blog/post2.jpg';
import { Popover } from 'react-bootstrap';

const prevPopover = (
    <Popover id="prev-popover">
        <Popover.Body>
            <div className="d-flex align-items-center">
                <img src={post1} width="60" className="me-3 rounded-sm" alt="thumb" />
                <div className="flex-grow-1">
                    <h6 className="fs-14 fw-semibold mt-0 mb-1">Introducing new blazzing fast user interface</h6>
                    <span className="d-block fs-13 text-muted">by Emily Blunt</span>
                </div>
            </div>
        </Popover.Body>
    </Popover>
);

const nextPopover = (
    <Popover id="prev-popover">
        <Popover.Body>
            <div className="d-flex align-items-center">
                <img src={post2} width="60" className="me-3 rounded-sm" alt="thumb" />
                <div className="flex-grow-1">
                    <h6 className="fs-14 fw-semibold mt-0 mb-1">What you should know before...</h6>
                    <span className="d-block fs-13 text-muted">by Emily Blunt</span>
                </div>
            </div>
        </Popover.Body>
    </Popover>
);

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
        authors: [
            {
                avatarUrl: img1,
                name: 'Emily Blunt',
                slug: 'emily-blunt',
            },
            {
                avatarUrl: img2,
                name: 'Geezy N',
                slug: 'geezy-n',
            },
        ],
        publishedOn: '11 Mar, 2020',
        readingTime: '3 min read',
        tags: [
            {
                id: '1',
                name: 'Startup',
                slug: 'startup',
            },
            {
                id: '2',
                name: 'Website Design',
                slug: 'website-design',
            },
            {
                id: '3',
                name: 'Website Development',
                slug: 'website-development',
            },
        ],
    };

    return (
        <MainLayout
            hero={
                <BlogPostHeader
                    slug={slug || ''}
                    title={data.title}
                    tag={data.tag}
                    author={data.authors[0]}
                    publishedOn={data.publishedOn}
                    readingTime={data.readingTime}
                />
            }>
            <>
                {/* TODO: pass in post content */}
                <PostContent tags={data.tags} content="" />

                {/* POST NAVIGATION */}
                <PostNavigation
                    currentPostTitle={data.title}
                    authors={data.authors}
                    nextPostPopover={nextPopover}
                    prevPostPopover={prevPopover}
                />

                {/* COMMENTS */}
            </>
        </MainLayout>
    );
};

export default BlogPostPage;
