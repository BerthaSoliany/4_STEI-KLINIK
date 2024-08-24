import { NextResponse } from 'next/server';
import { getDataFromSheet } from '../../actions/google-sheets.action';

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();

        if (!email || !password) {
            return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
        }

        // Fetch the data from Google Sheets
        const data = await getDataFromSheet();
        console.log('Fetched data:', data); // Debugging line

        // Ensure data is not empty
        if (data.length === 0) {
            return NextResponse.json({ error: 'No data found in the sheet' }, { status: 404 });
        }

        // Find user by email and password
        const user = data.find((row: string[]) => row[2] === email && row[3] === password);
        console.log('User found:', user); // Debugging line

        if (!user) {
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
        }

        // Set up a session or token here
        // For example, using JWT or session cookies

        return NextResponse.json({ message: 'Login successful' }, { status: 200 });
    } catch (error) {
        console.error('Error during login:', error);
        return NextResponse.json({ error: 'Failed to login' }, { status: 500 });
    }
}
