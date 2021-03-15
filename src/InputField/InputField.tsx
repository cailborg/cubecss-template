import React from "react";
import "./InputField.scss";
import TextField from "@material-ui/core/TextField";
import { InputModeType } from "./types";

export interface InputFieldProps {
    type?: string;
    ref?: React.Ref<HTMLElement>;
    inputRef?: React.Ref<HTMLInputElement>;
    label?: string;
    placeholder?: string;
    value?: string | null;
    defaultValue?: string;
    shrinkLabel?: boolean;
    maxLength?: number;
    disabled?: boolean;
    error?: string;
    helperText?: string;
    autoComplete?: string;
    trackingId?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onMouseDown?: (event: React.MouseEvent<HTMLInputElement>) => void;
    onMouseOver?: (event: React.MouseEvent<HTMLInputElement>) => void;
    onMouseLeave?: (event: React.MouseEvent<HTMLInputElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    inputMode?: InputModeType;
}

export const InputField: React.FC<InputFieldProps> = React.forwardRef(
    function InputField(
        {
            type,
            label,
            placeholder,
            value,
            defaultValue,
            maxLength,
            disabled,
            error,
            helperText: helperTextProp,
            autoComplete,
            trackingId,
            onChange,
            onFocus,
            onBlur,
            onMouseDown,
            onMouseOver,
            onMouseLeave,
            onKeyDown,
            onKeyUp,
            onKeyPress,
            inputRef,
            inputMode,
        },
        ref?: React.Ref<HTMLElement>
    ) {
      const helperText = error || helperTextProp;
        return (
            <TextField
                label={label}
                className="textfield"
                helperText={helperText}
                disabled={disabled}
                type={type}
                error={Boolean(error)}
                placeholder={placeholder}
                value={value}
                defaultValue={defaultValue}
                inputProps={{
                    inputRef,
                    autoComplete,
                    maxLength,
                    trackingId,
                }}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                onMouseDown={onMouseDown}
                onMouseOver={onMouseOver}
                onMouseLeave={onMouseLeave}
                onKeyDown={onKeyDown}
                onKeyUp={onKeyUp}
                onKeyPress={onKeyPress}
                inputMode={inputMode}
            />
        );
    }
);
