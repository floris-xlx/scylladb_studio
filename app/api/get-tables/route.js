import { NextResponse } from 'next/server';

const tables = [
    "table1",
    "table2",
    "table3",
    "table4",
    "table5",
    "table6",
    "table7",
    "table8",
    "table9",
    "table10"
];

export async function GET() {
    return NextResponse.json(tables);
}