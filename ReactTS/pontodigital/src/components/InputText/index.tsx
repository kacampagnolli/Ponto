import * as React from 'react';
import TextField from 'material-ui/TextField';

interface Props {
    hintText?: string;
    floatingLabelText: string;
    floatingLabelFixed?: boolean;
    errorText?: string;
    errorStyle?: React.CSSProperties;
    fullWidth?: boolean;
    disabled?: boolean;
    style?: React.CSSProperties;
    value: string;
    defaultValue?: string;
    name: string;
    id: string;
    type: string;
    onChange(): void;
}

const InputTextComponent: React.SFC<Props> = (props) => {
    const {
        hintText,
        floatingLabelText,
        floatingLabelFixed,
        errorText,
        errorStyle,
        fullWidth,
        disabled,
        style,
        value,
        defaultValue,
        name,
        id,
        onChange,
        type,
    } = props;
    return (
        <TextField
            hintText={hintText}
            floatingLabelText={floatingLabelText}
            floatingLabelFixed={floatingLabelFixed}
            errorText={errorText}
            errorStyle={errorStyle}
            fullWidth={fullWidth}
            disabled={disabled}
            onChange={onChange}
            style={style}
            type={type}
            value={value}
            defaultValue={defaultValue}
            name={name}
            id={id}  
        />
    );
};

export default InputTextComponent;