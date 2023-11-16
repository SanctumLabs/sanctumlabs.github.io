import { ReactNode, InputHTMLAttributes } from 'react';
import { FieldErrors, Control } from 'react-hook-form';

export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
    startIcon?: ReactNode;
    label?: string;
    type?: string;
    name: string;
    comp?: string;
    placeholder?: string;
    register?: any;
    errors?: FieldErrors;
    control?: Control<any>;
    className?: string;
    labelClassName?: string;
    containerClass?: string;
    textClassName?: string;
    refCallback?: any;
    action?: ReactNode;
    rows?: string | number;
}
