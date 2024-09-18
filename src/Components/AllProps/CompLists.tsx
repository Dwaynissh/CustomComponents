import { FC, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface iPropComp extends HTMLAttributes<HTMLElement> {
    text: string;
}

const CompLists:FC<iPropComp> = ({
    text,
    className,...props
}) => {
  return (
    <div>
        <div {...props} className={twMerge(`h-[50vh] w-full flex justify-center items-center`, className)}>
            <div>{text}</div>
        </div>
    </div>
  )
}

export default CompLists