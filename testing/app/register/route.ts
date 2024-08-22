import { NextResponse } from 'next/server';
import { addDataToSheet } from '../../actions/google-sheets.action'; 
export async function POST(request: Request) {
    try {
        const { firstName, lastName, email, password } = await request.json();

        if (!firstName || !lastName || !email || !password) {
            return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
        }

        const newData = [
            [firstName, lastName, email, password],
        ];

        await addDataToSheet(newData);

        return NextResponse.json({ message: 'Data added successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error adding data to sheet:', error);
        return NextResponse.json({ error: 'Failed to add data' }, { status: 500 });
    }
}
