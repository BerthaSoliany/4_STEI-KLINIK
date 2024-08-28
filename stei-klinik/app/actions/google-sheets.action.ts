'use server';
import { google } from "googleapis";

// Function to get data from the sheet
export async function getSheetData() { 
  const glAuth = await google.auth.getClient({
    projectId: "coba-milestone",
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL!,
      private_key: process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, "\n")
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const glSheets = google.sheets({ version: "v4", auth: glAuth });

  await glSheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID!,
    range: "user_data!A:F",
    valueInputOption: "USER_ENTERED",
    requestBody: {
        values: [
            ["Emma", "Watson", "kaguyasama@gmail.com", "Coba@dulu"],
            // Add more rows as needed
        ]
    }
  });
}

// Define and export addDataToSheet function
export async function addDataToSheet(newData: any[]) {
  const glAuth = await google.auth.getClient({
    projectId: "coba-milestone",
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL!,
      private_key: process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, "\n")
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const glSheets = google.sheets({ version: "v4", auth: glAuth });

  await glSheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID!,
    range: "user_data!A:F",
    valueInputOption: "USER_ENTERED",
    requestBody: {
        values: newData
    }
  });
}

export async function getDataFromSheet() {
  const glAuth = await google.auth.getClient({
    projectId: "coba-milestone",
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL!,
      private_key: process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, "\n")
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const glSheets = google.sheets({ version: "v4", auth: glAuth });

  const response = await glSheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEET_ID!,
    range: "user_data!A:F",
  });

  // Return the data
  return response.data.values || [];
}