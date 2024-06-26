import React from 'react';

import { CurrentDayOfWeek, CurrentDayOfMonth, CurrentMonth, CurrentYear, CurrentPeriodOfDay, CurrentEmojiPeriodOfDay } from "@/app/packages/hooks/datetime/DatetimeScript.js";

const DayTimeGreeter = ({
    username,
    marginTop = 24

}) => {

    return (
        <div style={{
            marginTop: `${marginTop}px`
        }}>
            <p className="mb-1 text-xl font-bold text-primary">Good {CurrentPeriodOfDay}, {username} {CurrentEmojiPeriodOfDay}</p>
            <p className="text-sm font-medium text-primary-secondary">It's {CurrentDayOfWeek}, {CurrentDayOfMonth} {CurrentMonth} {CurrentYear}.</p>
        </div>


    )
}

export default DayTimeGreeter; 