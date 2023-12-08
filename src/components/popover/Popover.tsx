import { forwardRef, ForwardRefExoticComponent } from 'react';
import { Popover } from 'react-bootstrap';

type PopOverProps = {
    id: string;
    imageUrl: string;
    title: string;
    subtitle: string;
}

// TODO: component not properly being forwarded refs
const PopOver: ForwardRefExoticComponent<PopOverProps> = forwardRef<HTMLDivElement, PopOverProps>(({ id, imageUrl, title, subtitle}, ref) => {
    return (
        <Popover id={id} ref={ref}>
            <Popover.Body>
                <div className="d-flex align-items-center">
                    <img src={imageUrl} width="60" className="me-3 rounded-sm" alt="thumb" />
                    <div className="flex-grow-1">
                        <h6 className="fs-14 fw-semibold mt-0 mb-1">{title}</h6>
                        <span className="d-block fs-13 text-muted">{subtitle}</span>
                    </div>
                </div>
            </Popover.Body>
        </Popover>
    )
})

export default PopOver;
