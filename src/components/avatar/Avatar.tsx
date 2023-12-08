import { FC } from 'react';
import { Link } from 'react-router-dom';

type AvatarProps = {
    classnames?: string;
    avatar: PostAuthor;
};

const Avatar: FC<AvatarProps> = ({ avatar: { avatarUrl, name, slug }, classnames }) => {
    return (
        <Link to={`/authors/${slug}`} className={`avatar-group-item me-1 ${classnames || ''}`}>
            <img src={avatarUrl} alt={name} className="img-fluid avatar-xs rounded-circle avatar-border" />
        </Link>
    );
};

export default Avatar;
