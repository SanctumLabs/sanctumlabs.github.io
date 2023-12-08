import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { AvatarGroup } from 'components/avatar';
import classNames from 'classnames';
import { BlogPostProps } from './types';

const BlogPostCard: FC<BlogPostProps> = ({ post }) => {
    return (
        <Card className="card-listing-item">
            <div className="card-img-top-overlay">
                <div className={classNames(post.overlay ? 'overlay-' + post.overlay : 'overlay')}></div>
                <span className={classNames('card-badge', 'top-right', 'bg-' + post.tag.variant, 'text-white')}>
                    {post.tag.value}
                </span>

                <Card.Img src={post.image.url} alt={post.image.alt} variant="top" />

                <div className="card-overlay-bottom">
                    <h2>
                        <Link to={`/blog/${post.slug}`} className="text-white">
                            {post.title}
                        </Link>
                    </h2>
{/* TODO: update group avatars */}
                    {/* <AvatarGroup avatars={post.groupAvatars} /> */}
                </div>
            </div>
        </Card>
    );
};

export default BlogPostCard;
