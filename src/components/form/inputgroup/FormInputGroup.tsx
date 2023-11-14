import { InputGroup } from 'react-bootstrap';
import SelectInput from '../select';
import TextualInput from '../textinput';
import { FormInputProps } from '../form.interfaces';

// extend textual form-controls with add-ons
const FormInputGroup = ({
    startIcon,
    type,
    name,
    placeholder,
    comp,
    register,
    errors,
    rows,
    className,
    textClassName,
    refCallback,
    ...otherProps
}: FormInputProps) => {
    return (
        <InputGroup>
            <InputGroup.Text className={textClassName}>{startIcon}</InputGroup.Text>
            {type === 'select' ? (
                <SelectInput
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    refCallback={refCallback}
                    comp={comp}
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
                    comp={comp}
                    errors={errors}
                    register={register}
                    className={className}
                    rows={rows}
                    {...otherProps}
                />
            )}
        </InputGroup>
    );
};

export default FormInputGroup;
