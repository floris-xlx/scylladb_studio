import React, { useEffect, useState } from 'react';
import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts';

import { GetCurrencyById } from '@/app/packages/supabase/SupabaseUserData.js';
import formatBigNumber from '@/app/packages/hooks/formatting/CalculateBigNumber.js';
import convertCurrencyToSymbol from '@/app/packages/hooks/formatting/CurrencySymbol.js';
import { formatDate } from '@/app/packages/hooks/datetime/RelativeDate.js';

import { ToolTipText } from "@/app/packages/ui/ToolTip/ToolTip.jsx";

const data = [
    { date: '10/02/2024', Balance: 40000 },
    { date: '11/02/2024', Balance: 31200 },
    { date: '12/02/2024', Balance: -21980 },
    { date: '13/02/2024', Balance: 26700 },
    { date: '14/02/2024', Balance: 18300 },
    { date: '15/02/2024', Balance: 24500 },
    { date: '16/02/2024', Balance: 35600 },
    { date: '17/02/2024', Balance: 34200 },
    { date: '18/02/2024', Balance: 33000 },
    { date: '19/02/2024', Balance: 36000 },
    { date: '20/02/2024', Balance: 37500 },
    { date: '21/02/2024', Balance: 38800 },
    { date: '22/02/2024', Balance: 32000 },
    { date: '23/02/2024', Balance: 41000 },
    { date: '24/02/2024', Balance: 39500 },
    { date: '25/02/2024', Balance: 36500 },
    { date: '26/02/2024', Balance: 50000 },
]



const Example = ({ userId }) => {
    const [currency, setCurrency] = useState(null);

    useEffect(() => {

        if (userId) {
            GetCurrencyById(userId).then((currency) => {
                setCurrency(currency);
            });
        }

        return () => {
            setCurrency(null);
        };
    }, [userId]);

    return (
        <div className=" rounded-md  ml-2 w-full sm:mr-3">

            <div className="flex flex-row border-primary border-b">

                <ToolTipText
                    hoverable_title="Equity Curve"
                    text="This is an equity curve chart. It shows the balance of your account over time."
                />

            </div>

            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <Tooltip
                        labelFormatter={(index) => `${formatDate(data[index].date)}`}
                        formatter={(value, name) => [`${convertCurrencyToSymbol(currency)}${formatBigNumber(value)}`, name]}
                        contentStyle={{
                            borderRadius: '10px',
                            border: `1px solid var(--color-secondary)`,
                            backgroundColor: `var(--color-secondary)`
                        }}
                    />

                    <Area
                        type="monotone"
                        dataKey="Balance"
                        stroke="var(--color-brand-primary)"
                        fillOpacity={(dataMin, dataMax, Balance) => {
                            const range = dataMax - dataMin;
                            const normalizedValue = (Balance - dataMin) / range;
                            return 0.2 + (0.8 * normalizedValue); // gradually fades from 0.2 to 1.0 opacity
                        }}
                        fill="url(#colorBalance)"
                        strokeWidth="3px"
                        strokeOpacity="0.8"
                    />
                    <defs>
                        <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="var(--color-brand-primary)" stopOpacity={0.6} />
                            <stop offset="95%" stopColor="var(--color-brand-disabled)" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Example;