import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';

interface Props {
    label?: string;
    fullWidth?: boolean;
    disabled?: boolean;
    backgroundColor?: string;
    labelColor?: string;
    primary?: boolean;
    secondary?: boolean;
    style?: React.CSSProperties;
    children?: JSX.Element;
    loading?: boolean;
    onClick?(): void;

}

const RaisedButtonComponent: React.SFC<Props> = (props) => {
    const {
        label,
        fullWidth,
        disabled,
        backgroundColor,
        labelColor,
        primary,
        secondary,
        style,
        children,
        loading,
        onClick
    } = props;
    return (
        <RaisedButton 
            label={label}
            fullWidth={fullWidth}
            disabled={disabled}
            backgroundColor={backgroundColor}
            labelColor={labelColor}
            onClick={onClick}
            primary={primary}
            secondary={secondary}
            style={style}
        >
        
            {loading ? <CircularProgress size={30} style={{padding: 2 }}/> : children} 
        </RaisedButton>
    );
};

export default RaisedButtonComponent;