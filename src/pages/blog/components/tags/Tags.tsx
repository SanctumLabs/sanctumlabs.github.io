import { FC } from 'react';
import { Link } from 'react-router-dom';

type TagProps = {
    title?: string;
    tags: Tag[];
};

const Tags: FC<TagProps> = ({ title = 'Tags', tags }) => {
    return (
        <div className="d-flex align-items-center mb-5">
            <h5 className="me-2 fw-medium">{title}</h5>
            <div>
                {tags.map(({ id, name }) => (
                    <Link key={id} className="btn btn-sm btn-white mb-1 me-1" to="#">
                        {name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Tags;
