import { FC } from 'react';
import Lightbox from 'react-image-lightbox';

type LightBoxProps = {
    images: Image[];
    photoIndex: number;
    closeLightbox: () => void;
    moveNext: () => void;
    movePrev: () => void;
};

const LightBox: FC<LightBoxProps> = ({ images, photoIndex, closeLightbox, moveNext, movePrev }) => {
    return (
        <Lightbox
            mainSrc={images[photoIndex].url}
            nextSrc={images[(photoIndex + 1) % images.length].url}
            prevSrc={images[(photoIndex + images.length - 1) % images.length].url}
            onCloseRequest={closeLightbox}
            onMovePrevRequest={movePrev}
            onMoveNextRequest={moveNext}
            imageTitle={<p>{images[photoIndex].caption}</p>}
            mainSrcThumbnail={images[photoIndex].caption}
        />
    );
};

export default LightBox;
