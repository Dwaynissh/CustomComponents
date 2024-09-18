import { FC } from "react"
import {cn} from "../Utils/cn"
import { ButtonChoices } from "../Utils/BtnVariants";
import { iPropsBtn } from "../Utils/Interfaces";




const GlobalBtn:FC<iPropsBtn> = ({
    text,
    className,
    choice,
    size,
    ...props
}) => {
  return (
    <div>
        <button {...props} className={cn(ButtonChoices({
            choice, size,
        }), className)}>

        {text}</button>
    </div>
  )
}

export default GlobalBtn

