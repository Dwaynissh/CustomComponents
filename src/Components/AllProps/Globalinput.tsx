
import { FC, InputHTMLAttributes, ReactNode, useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface iPropsinput extends InputHTMLAttributes<HTMLInputElement>  {
  placeholder: string;
  color?: string;
  newColor?: string;
  icon?: ReactNode;
  icon2?: ReactNode;
}


const Globalinput:FC<iPropsinput> = ({
    className,
    placeholder,
    color,
    newColor,
    icon,
    icon2,
    ...props
    
}) => {
    const myInput: React.MutableRefObject<any> =useRef(null);
    const [state, setState] = useState<boolean>(false)

    useEffect(()=>{
        if (state) {
            myInput.current.focus();
        }
    }, [state])

  return (
    <div>
        <div className={twMerge(`
        h-[60px] border w-[70%] flex justify-center items-center cursor-pointer pl-[8px] pr-[6px] rounded-[8px] transition-all duration-300
        ${state 
            ? `${color ? color : "border-green-500"}`
            : `${newColor ? newColor : ""}`
        }`, className)}

        onClick={() => {
        setState(true);
        }}
      >
            <input ref={myInput} {...props} type="text" placeholder={`${placeholder}`} className="flex-1 h-full text-[20px] border-none outline-none" onBlur={() => {
            setState(false);
            }} />
            <div className="flex justify-center items-center h-[78%] w-[20%] lawngreenbg rounded-[8px] text-white text-[22px]">
               
                {icon}
            </div>
        </div>
    </div>
  )
}

export default Globalinput