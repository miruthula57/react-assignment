import { ButtonProps } from "@mui/material/Button";
import { ReactNode } from "react";

export interface ICustomButtonProps extends Omit<ButtonProps, "id"> {
  label: string | ReactNode;
  id: string;
  className?: string;
}