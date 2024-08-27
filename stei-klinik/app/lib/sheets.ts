import { google } from 'googleapis';
import { GoogleAuth } from 'google-auth-library';

export async function getSheetsClient() {
    const auth = await google.auth.getClient({
        credentials: {
          client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL!,
          private_key: process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, "\n")
        },
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      });
    const sheets = google.sheets({ version: 'v4', auth });
    return sheets;
}

export async function getSheetValues(range: string) {
  const sheets = await getSheetsClient();
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEET_ID!,
    range,
  });
  return response.data.values || [];
}

export async function appendToSheet(range: string, values: any[]) {
  const sheets = await getSheetsClient();
  const resource = {
    values,
  };
  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID!,
    range: range,
    valueInputOption: 'RAW',
    requestBody: resource,
  });
}
