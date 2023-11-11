import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import classNames from 'classnames';

type BackToTopProps = {
    variant?: string;
};

const BackToTop = ({ variant = 'primary' }: BackToTopProps) => {
    return (
        <Link
            className={classNames('btn', 'btn-soft-' + variant, 'shadow-none', 'btn-icon', 'btn-back-to-top')}
            id="btn-back-to-top"
            to="#"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
            <FeatherIcon icon="arrow-up" className="icon-xxs" />
        </Link>
    );
};

export default BackToTop;
