import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import classNames from 'classnames';
import { BlogPostProps } from './types';

const BlogPostTile :FC<BlogPostProps> = ({ post }) => {
    return (
        <Card className="card-listing-item">
            <div className="card-img-top-overlay">
                <div className={classNames(post.overlay ? 'overlay-' + post.overlay : 'overlay')}></div>
                <span className={classNames('card-badge', 'top-right', 'bg-' + post.tag.variant, 'text-white')}>
                    {post.tag.value}
                </span>

                <Card.Img src={post.image.url} alt="Card Image" variant="top" />

                <div className="card-overlay-bottom">
                    <h2>
                        <Link to={`/blog/${post.slug}`} className="text-white">
                            {post.title}
                        </Link>
                    </h2>

                    <div className="avatar-group">
                        {(post.groupAvatars || []).map((img, index) => {
                            return (
                                <Link to="#" className="avatar-group-item me-1" key={index.toString()}>
                                    <img
                                        src={img}
                                        alt="avatar"
                                        className="img-fluid avatar-xs rounded-circle avatar-border"
                                    />
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default BlogPostTile;
