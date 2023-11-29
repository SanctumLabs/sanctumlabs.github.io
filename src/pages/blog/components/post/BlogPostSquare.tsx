import { FC } from 'react';
import { Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { BlogPostProps } from './types';

const BlogPostSquare: FC<BlogPostProps> = ({ post }) => {
    return (
        <div>
            <img src={post.image.url} alt={post.image.alt} className="img-fluid d-block shadow rounded" />

            <div className="mt-3">
                <Link to="#">
                    <Badge bg="" className={classNames('badge-soft-' + post.tag.variant, 'mb-1')}>
                        {post.tag.value}
                    </Badge>
                </Link>
            </div>

            <h4 className="fw-semibold mt-1">
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </h4>

            <p className="text-muted">
                {post.description}{' '}
                <Link to={`/blog/${post.slug}`} className="text-primary">
                    read more
                </Link>
            </p>
        </div>
    );
};

export default BlogPostSquare;
