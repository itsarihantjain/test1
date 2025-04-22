'use client';

import { COLORS } from '@/colors/colors';
import Image from 'next/image';

export const Button: React.FC<ButtonProps> =
    ({ onClick, text, icon, iconWidth = 14, iconHeight = 14, bg = COLORS.white, border = COLORS.white, reverse = false, textColor = COLORS.black, gap = 'gap-4' }) => {

        const bgClass = `bg-[${bg}]`;
        const textColorClass = `text-[${textColor}]`;

        return (
            <div onClick={() => onClick?.()} className={`flex items-center justify-center whitespace-nowrap pt-3 pb-3 pl-4 pr-4 rounded-full border cursor-pointer ${gap} ${bgClass} ${textColorClass} ${reverse ? 'flex-row-reverse' : ''}`}
                style={{ borderColor: border, background: bg, color: textColor }}>
                {icon && (<Image src={icon || ''} alt={""} width={iconWidth} height={iconHeight} className="flex items-center" />)}
                <div className="flex items-center text-[16px] font-medium">
                    {text}
                </div>
            </div>
        )

    }