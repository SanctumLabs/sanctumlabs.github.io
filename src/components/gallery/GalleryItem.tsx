import { FC } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

type GalleryItemProps = {
    title: string;
    imageUrl: string;
    onClick: () => void;
}

const GalleryItem: FC<GalleryItemProps> = ({ title, imageUrl, onClick }) => {
    return (
        <Link
            to="#"
            className="image-popup"
            title={title}
            onClick={onClick}
        >
            <Card className="shadow rounded-sm">
                <Card.Body className="p-1">
                    <img src={imageUrl} alt={title} className="img-fluid rounded-sm" />
                </Card.Body>
            </Card>
        </Link>
    )
};

export default GalleryItem;