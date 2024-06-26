// DateTimeScript.js
'use client'


const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const PeriodOfDay = ['Morning', 'Afternoon', 'Evening', 'Night']
const EmojiPeriodOfDay = ['🌙', '☀️', '🌓', '🌒']

import moment from 'moment-timezone';
const date = moment().tz("Europe/Amsterdam");

export const CurrentDayOfWeek = date.format('dddd');
export const CurrentDayOfMonth = date.date();
export const CurrentMonth = date.format('MMMM');
export const CurrentYear = date.year();

const hour = date.hours();
let periodIndex;
if (hour >= 6 && hour < 12) {
    periodIndex = 0; // Morning
} else if (hour >= 12 && hour < 18) {
    periodIndex = 1; // Afternoon
} else if (hour >= 18 && hour < 24) {
    periodIndex = 2; // Evening
} else {
    periodIndex = 3; // Night
}
export const CurrentPeriodOfDay = PeriodOfDay[periodIndex];
export const CurrentEmojiPeriodOfDay = EmojiPeriodOfDay[periodIndex];