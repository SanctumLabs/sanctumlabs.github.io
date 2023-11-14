import { FC } from 'react';
import { Form } from 'react-bootstrap';
import { FormInputProps } from '../form.interfaces';
import CheckInput from '../checkinput';
import FormInputGroup from '../inputgroup';
import SelectInput from '../select';
import TextualInput from '../textinput';

const FormInput: FC<FormInputProps> = ({
    startIcon,
    label,
    type,
    name,
    placeholder,
    register,
    errors,
    control,
    className,
    labelClassName,
    containerClass,
    textClassName,
    refCallback,
    action,
    rows,
    ...otherProps
}) => {
    // handle input type
    const comp = type === 'textarea' ? 'textarea' : type === 'select' ? 'select' : 'input';

    return (
        <>
            {type === 'hidden' ? (
                <input type={type} name={name} {...(register ? register(name) : {})} {...otherProps} />
            ) : (
                <>
                    {type === 'checkbox' || type === 'radio' ? (
                        <Form.Group className={containerClass}>
                            <CheckInput
                                type={type}
                                label={label}
                                name={name}
                                placeholder={placeholder}
                                refCallback={refCallback}
                                errors={errors}
                                register={register}
                                comp={comp}
                                className={className}
                                rows={rows}
                                {...otherProps}
                            />
                        </Form.Group>
                    ) : type === 'select' ? (
                        <Form.Group className={containerClass}>
                            {label && (
                                <>
                                    <Form.Label className={labelClassName}>{label}</Form.Label>
                                    {action && action}
                                </>
                            )}
                            {startIcon ? (
                                <FormInputGroup
                                    type={type}
                                    startIcon={startIcon}
                                    name={name}
                                    comp={comp}
                                    textClassName={textClassName}
                                    placeholder={placeholder}
                                    refCallback={refCallback}
                                    errors={errors}
                                    register={register}
                                    className={className}
                                    rows={rows}
                                    {...otherProps}
                                />
                            ) : (
                                <SelectInput
                                    type={type}
                                    name={name}
                                    placeholder={placeholder}
                                    refCallback={refCallback}
                                    errors={errors}
                                    register={register}
                                    comp={comp}
                                    className={className}
                                    rows={rows}
                                    {...otherProps}
                                />
                            )}
                        </Form.Group>
                    ) : (
                        <Form.Group className={containerClass}>
                            {label && (
                                <>
                                    <Form.Label className={labelClassName}>{label}</Form.Label>
                                    {action && action}
                                </>
                            )}
                            {startIcon ? (
                                <FormInputGroup
                                    type={type}
                                    startIcon={startIcon}
                                    name={name}
                                    comp={comp}
                                    textClassName={textClassName}
                                    placeholder={placeholder}
                                    refCallback={refCallback}
                                    errors={errors}
                                    register={register}
                                    className={className}
                                    rows={rows}
                                    {...otherProps}
                                />
                            ) : (
                                <TextualInput
                                    type={type}
                                    name={name}
                                    placeholder={placeholder}
                                    refCallback={refCallback}
                                    errors={errors}
                                    register={register}
                                    comp={comp}
                                    className={className}
                                    rows={rows}
                                    {...otherProps}
                                />
                            )}
                        </Form.Group>
                    )}
                </>
            )}
        </>
    );
};

export default FormInput;
