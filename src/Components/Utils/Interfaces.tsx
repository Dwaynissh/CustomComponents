import { VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";
import { ButtonChoices } from "./BtnVariants";


export interface iPropsBtn extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof ButtonChoices> {
    text: string;
}