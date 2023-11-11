import { FunctionComponent, ReactNode, Children } from 'react';
import { Helmet } from 'react-helmet';
import BackToTop from '../components/backtotop';

export type RootLayoutProps = {
  title?: string;
  description?: string;
  children: typeof Children | ReactNode;
};

const RootLayout: FunctionComponent<RootLayoutProps> = ({
  title,
  description,
  children,
}: RootLayoutProps) => {
  return (
    <>
      <Helmet defaultTitle="SanctumLabs" titleTemplate="SanctumLabs | %s" title={title}>
        <meta name="description" content={description} />
      </Helmet>
      {children}
     <BackToTop variant="secondary" />
    </>
  );
};

export default RootLayout;