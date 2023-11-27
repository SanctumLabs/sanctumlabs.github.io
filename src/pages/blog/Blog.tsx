import MainLayout from 'layouts/main';
import BlogHero from './sections/hero';

// images
import hero from 'assets/images/blog/hero.jpg';

const Blog = () => {
    return (
        <MainLayout
            heroClassNames={`header-7`}
            heroStyles={{ background: `url(${hero}) no-repeat` }}
            overlay={<div className="overlay" />}
            navbarCSSClasses='navbar-dark'
            hero={
                <BlogHero
                    subtitle="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed consequuntur
                    ratione voluptatem sequi nesciunt."
                    />
            }>
                <div></div>
            </MainLayout>
    );
};

export default Blog;
