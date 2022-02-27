import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

import { mdiCalendarMonth } from '@mdi/js';

export default function DatePickerIcon({ style }: any) {
    return (
        <span className={`${style} ml-2`}>
            <SvgIcon htmlColor='white'>
                <path d={mdiCalendarMonth} />
            </SvgIcon>
        </span>
    )
}