import { NextResponse } from 'next/server';
import { getDataFromSheet } from '../../actions/google-sheets.action';

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();
        
        if (!email || !password) {
            return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
        }

        console.log('Received email:', email);
        console.log('Received password:', password);

        const data = await getDataFromSheet();
        console.log('Fetched data from sheet:', JSON.stringify(data, null, 2));

        if (!data || data.length === 0) {
            return NextResponse.json({ error: 'No data found in the sheet' }, { status: 404 });
        }

        const user = data.find((row: string[]) => {
            console.log('Checking row:', row);
            return row[2].trim() === email.trim() && row[3].trim() === password.trim();
        });

        console.log('User found:', user);

        if (!user) {
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
        }

        return NextResponse.json({ message: 'Login successful' }, { status: 200 });
    } catch (error) {
        console.error('Error during login:', error);
        return NextResponse.json({ error: 'Failed to login' }, { status: 500 });
    }
}