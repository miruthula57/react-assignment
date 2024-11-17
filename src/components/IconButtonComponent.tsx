import IconButton from '@mui/material/IconButton';
import { ICustomIconButtonProps } from '../interface/ICustomIconButtonProps';

const IconButtonComponent = (props: ICustomIconButtonProps) => {
    const { color, icon, id, size, ...rest } = props;
    return (
        <IconButton id={id + `_icon_button`} size={size} color={color} {...rest}>
            {icon}
        </IconButton>
    )
}

export default IconButtonComponent