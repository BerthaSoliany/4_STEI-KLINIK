"use server";
import { google } from "googleapis";

export const getSheetsData = async () => {
    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n")
        },
        scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"]
    });
    
    const client = await auth.getClient();
    
    const sheets = google.sheets({ version: "v4", auth: client });
    
    const range = "Sheet1!A:B";
    
    try {
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range
        });
        return response.data.values;
    }
    catch (err) {
        console.error("Error fetching sheet data", err);
    }
}