import { NextResponse } from 'next/server';

const keyspaces = [
    "keyspace1",
    "keyspace2",
    "keyspace3",
    "keyspace4",
    "keyspace5",
    "keyspace6",
    "keyspace7",
    "keyspace8",
    "keyspace9",
    "keyspace10"
];

export async function GET() {
    return NextResponse.json(keyspaces);
}