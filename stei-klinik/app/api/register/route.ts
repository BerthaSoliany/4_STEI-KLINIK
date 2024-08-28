import { NextResponse } from 'next/server';
import { addDataToSheet } from '../../actions/google-sheets.action';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';

export async function POST(request: Request) {
    try {
        const { firstName, lastName, email, password } = await request.json();

        if (!firstName || !lastName || !email || !password) {
            return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
        }

        const new_id = uuidv4();

        const name = firstName.trim() + " " + lastName.trim();

        const hashedPassword = await bcrypt.hash(password, 10);

        const newData = [
            [new_id, name, email, hashedPassword],
        ];

        await addDataToSheet(newData);

        return NextResponse.json({ message: 'Data added successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error adding data to sheet:', error);
        return NextResponse.json({ error: 'Failed to add data' }, { status: 500 });
    }
}