import { LazyExoticComponent, Suspense } from 'react';
import PagerLoader from 'components/loaders/pageloader/PageLoader';

type LoadComponentProps = {
    component: LazyExoticComponent<() => JSX.Element>;
};

const LoadComponent = ({ component: Component }: LoadComponentProps) => (
    <Suspense fallback={PagerLoader()}>
        <Component />
    </Suspense>
);

export default LoadComponent;
