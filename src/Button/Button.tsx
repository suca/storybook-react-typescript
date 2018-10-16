import * as React from 'react';
import './Button.css';

export interface Props {
    label: string;
    onClick: () => void;
    /**
     * @default false
     **/
    disabled?: boolean;
}

export const Button = (props: Props) => {
    const {
        label,
        onClick,
        disabled = false
    } = props;
    const disabledClass = disabled ? 'Button_disabled' : '';

    return (
        <div className={`Button ${disabledClass}`}
            onClick={!disabled ? onClick : () => true}>
            <span>{label}</span>
        </div>
  );
};
