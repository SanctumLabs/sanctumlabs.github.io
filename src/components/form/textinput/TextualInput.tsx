import { Form } from 'react-bootstrap';
import { FormInputProps } from '../form.interfaces';

// textual form-controls—like inputs, passwords, textareas etc.
const TextualInput = ({
    type,
    name,
    placeholder,
    register,
    errors,
    comp,
    rows,
    className,
    refCallback,
    ...otherProps
}: FormInputProps) => {
    return (
        <>
            <Form.Control
                type={type}
                placeholder={placeholder}
                name={name}
                as={comp}
                id={name}
                ref={(r: HTMLInputElement) => {
                    if (refCallback) refCallback(r);
                }}
                className={className}
                isInvalid={errors && errors[name] ? true : false}
                {...(register ? register(name) : {})}
                rows={rows}
                {...otherProps}
            ></Form.Control>

            {errors && errors[name] && (
                <Form.Control.Feedback type="invalid" className="d-block">
                    {/* @ts-ignore */}
                    {errors[name]['message']}
                </Form.Control.Feedback>
            )}
        </>
    );
};

export default TextualInput;
