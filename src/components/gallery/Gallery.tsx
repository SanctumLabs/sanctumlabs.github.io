import { FC, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import LightBox from 'components/lightbox';
import GalleryItem from './GalleryItem';

type GalleryProps = {
    gallery: GalleryItemType[];
};

const Gallery: FC<GalleryProps> = ({ gallery }) => {
    const galleryImages = (gallery || []).map((album) => {
        return album.image;
    });
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [photoIndex, setPhotoIndex] = useState<number>(0);

    // handle lightbox event
    const openLightbox = (index: number) => {
        setPhotoIndex(index);
        setIsOpen(true);
    };

    const closeLightbox = () => {
        setIsOpen(false);
    };

    const moveNext = () => {
        setPhotoIndex((prevState) => (prevState + 1) % galleryImages.length);
    };

    const movePrev = () => {
        setPhotoIndex((prevState) => (prevState + galleryImages.length - 1) % galleryImages.length);
    };

    return (
        <>
            <Row data-aos="fade-up">
                {(gallery || []).map(({ image: { url, alt, caption } }, index) => {
                    return (
                        <Col lg={6}>
                            <GalleryItem
                                key={index.toString()}
                                title={caption || alt}
                                imageUrl={url}
                                onClick={() => openLightbox(index)}
                            />
                        </Col>
                    );
                })}
            </Row>

            {/* image lightbox */}
            {isOpen && (
                <LightBox
                    images={galleryImages}
                    photoIndex={photoIndex}
                    closeLightbox={closeLightbox}
                    moveNext={moveNext}
                    movePrev={movePrev}
                />
            )}
        </>
    );
};

export default Gallery;
