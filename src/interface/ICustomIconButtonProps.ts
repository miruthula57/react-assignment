import { IconButtonProps } from "@mui/material/IconButton";

export interface ICustomIconButtonProps extends IconButtonProps {
    color?: 'inherit' | 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
    size?: 'small' | 'medium' | 'large';
    icon: JSX.Element;
    id: string;
}
