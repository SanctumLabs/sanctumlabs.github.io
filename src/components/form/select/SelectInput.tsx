import { Form } from 'react-bootstrap';
import { FormInputProps } from '../form.interfaces';

// handle select controls
const SelectInput = ({
    type,
    label,
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
            <Form.Select
                type={type}
                label={label}
                name={name}
                id={name}
                ref={(r: HTMLInputElement) => {
                    if (refCallback) refCallback(r);
                }}
                className={className}
                isInvalid={errors && errors[name] ? true : false}
                {...(register ? register(name) : {})}
                {...otherProps}
            />

            {errors && errors[name] && (
                // @ts-ignore
                <Form.Control.Feedback type="invalid">{errors[name]['message']}</Form.Control.Feedback>
            )}
        </>
    );
};

export default SelectInput;
