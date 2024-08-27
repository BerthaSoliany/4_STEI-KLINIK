'use server';
import { google } from "googleapis";
import { GoogleAuth } from "google-auth-library";

// Function to get data from the sheet
export async function getUserData() { 
  try {
    const auth = await google.auth.getClient({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL!,
        private_key: process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, "\n")
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
      
    const sheets = google.sheets({ version: "v4", auth });
    
    const range = "user_data!A:F";
    
    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range
    });
    return response.data.values;
  }
  catch (err) {
    console.error("Error fetching user data", err);
  }
}

// // Define and export addDataToSheet function
// export async function addDataToSheet(newData: any[]) {
//   const glAuth = await google.auth.getClient({
//     projectId: "coba-milestone",
//     credentials: {
//       "type": "service_account",
//       "project_id": "coba-milestone",
//       "private_key_id": "de9550aacf4092482d9fbf653da30b368518566a",
//       "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCz5L9MxxJxgPei\nHwEazHic2YXdc371O4B5hXdrtwH1AKlPYoUyj592u6wr63iZ1YJ2q3nsAC5Frbvf\nYTDhLM5d17tITKfZ4cj1LHml/VBxlWUnvXS7j/dHfMG+0KPqu2CaIokDkaUOh6Lj\ne170ItiQPONc6GM1sdXABrumzMAa40cX+PNZpAd09hDCTgG4w2siGC+JbxCXPV/E\n8T70RC+bwGricXJNCfKA3+aMARckla0IITydD5XOaxRTeYunKnwAN2sAvhrMnDZN\n8YPDg8P0ZBDYbcd/JU3FfiORpZOSYrwEmBgcYeBOSh58cwHgKMdu3CqJA2R8c4og\ngjZ15sg9AgMBAAECggEAJjrVGrRtq3hsZ+Qt4GuWsEKb67l5QBVykqC2BcqhHFeV\nI5080EdsbJeqmbTTbuHMdXqwkOJi8wTeWbT2ZcwXWSMZFl7QBwIwKkZW3dstBs5o\nbl8ZWSjZtLQDGpGNXDuQ5oCzXHJNwP47NBvKTJjBLDn8WYi7WLRfyAzGQUbfBndt\n7poFXXtNu14cMd7ophrwBqW/b96kgQ5T48sEH2XBmU5a5Bci6MnaeAaHaTfTEZcO\nLGs9wRlX/FStu3dHIiTszVd6GYuub921yzx0o6t423kMnY5LrM+zua4qWXq7/JSM\nlQZI06SQsN9h06c8nTYIzEk03LA2QM51CSLScxRNswKBgQDn4LrznEmofemkpV9U\nXyM171brQBfxMPvzf2o20xJuJsffoHPPffnO8BsGRU/XD4DMNjJFHGbDA0Aclu81\nISzccMhsG36scf/tOpRurf0VLmadHV32FM77Iz1LVKOsLz9a6kkTdTzRTGWTqBb/\nvIGOvbtxaGD4Jqexoy8r3VMxlwKBgQDGm5f0qkVBrl05PoWCrbeDKyGLWqT8iVH5\n1s16ZWh5x4nqNupv54E7XJ9aRltxaLi4gIRO9jspUYnUlJIoQDvvfnHKaI5GuU5i\nXmYn1ujWEqGEtBszZI8Em+n1JhgXGSniFuIRcCtifEMizVro5zuCW06sNSfHFysu\nXQgg4njnSwKBgG35tVGTX5ANYAIZ+RPAJ6gOAxCCjphzXhwH421rQIOD2ypiJGtV\n2WRflsGroAllLfYtAjyrEsYNRZwJrhxpxqgqybQUekj5rKNsNDgmRzGDl2GPKyBq\nkBymgwy2cQZaRlctZUlYQmcWL9sPTxEt69iyfjN0iQFI/CIRPm80gp+zAoGBALhQ\n6+wHHTEAdcnLaTJGr7mOjJn8bINlmWto2tcNR7FE6owvnNBvo/KIWeb4xqJwUoX/\n10pEn9EPt/9ORnoOatEvosD62ZdvH/yQqPOuMfWB4t36HAhM+aGIZM67JL5C/yiw\nnesbE1haBCBHPmhJOGQZAuE0j47nxI5JjmKeayATAoGAT0IgPq4Asz1fihXhzBMN\nNKsni86XWMN7VPrpWyX8olTl1KuhgB4LJB829fcl1crAy530raAnz95ya5YCZnUH\n8G73mU0kvB9cduq++vQoeEbo2YianGp/VrQ4Oivbke8Z6PHRLp5rAcXZDrkjMYCe\ne4raYmSbBiDvC23022defPE=\n-----END PRIVATE KEY-----\n",
//       "client_email": "cobamilestone@coba-milestone.iam.gserviceaccount.com",
//       "universe_domain": "googleapis.com"
//     },
//     scopes: ["https://www.googleapis.com/auth/spreadsheets"],
//   });

//   const glSheets = google.sheets({ version: "v4", auth: glAuth });

//   await glSheets.spreadsheets.values.append({
//     spreadsheetId: "1VgHVYzeUVcjp5S7_qhhTj6CrIXMrqSbA5lrHVcbrxNg",
//     range: "Sheet1!A:D",
//     valueInputOption: "USER_ENTERED",
//     requestBody: {
//         values: newData
//     }
//   });
// }

// export async function getDataFromSheet() {
//   const glAuth = await google.auth.getClient({
//     projectId: "coba-milestone",
//     credentials: {
//       "type": "service_account",
//       "project_id": "coba-milestone",
//       "private_key_id": "de9550aacf4092482d9fbf653da30b368518566a",
//       "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCz5L9MxxJxgPei\nHwEazHic2YXdc371O4B5hXdrtwH1AKlPYoUyj592u6wr63iZ1YJ2q3nsAC5Frbvf\nYTDhLM5d17tITKfZ4cj1LHml/VBxlWUnvXS7j/dHfMG+0KPqu2CaIokDkaUOh6Lj\ne170ItiQPONc6GM1sdXABrumzMAa40cX+PNZpAd09hDCTgG4w2siGC+JbxCXPV/E\n8T70RC+bwGricXJNCfKA3+aMARckla0IITydD5XOaxRTeYunKnwAN2sAvhrMnDZN\n8YPDg8P0ZBDYbcd/JU3FfiORpZOSYrwEmBgcYeBOSh58cwHgKMdu3CqJA2R8c4og\ngjZ15sg9AgMBAAECggEAJjrVGrRtq3hsZ+Qt4GuWsEKb67l5QBVykqC2BcqhHFeV\nI5080EdsbJeqmbTTbuHMdXqwkOJi8wTeWbT2ZcwXWSMZFl7QBwIwKkZW3dstBs5o\nbl8ZWSjZtLQDGpGNXDuQ5oCzXHJNwP47NBvKTJjBLDn8WYi7WLRfyAzGQUbfBndt\n7poFXXtNu14cMd7ophrwBqW/b96kgQ5T48sEH2XBmU5a5Bci6MnaeAaHaTfTEZcO\nLGs9wRlX/FStu3dHIiTszVd6GYuub921yzx0o6t423kMnY5LrM+zua4qWXq7/JSM\nlQZI06SQsN9h06c8nTYIzEk03LA2QM51CSLScxRNswKBgQDn4LrznEmofemkpV9U\nXyM171brQBfxMPvzf2o20xJuJsffoHPPffnO8BsGRU/XD4DMNjJFHGbDA0Aclu81\nISzccMhsG36scf/tOpRurf0VLmadHV32FM77Iz1LVKOsLz9a6kkTdTzRTGWTqBb/\nvIGOvbtxaGD4Jqexoy8r3VMxlwKBgQDGm5f0qkVBrl05PoWCrbeDKyGLWqT8iVH5\n1s16ZWh5x4nqNupv54E7XJ9aRltxaLi4gIRO9jspUYnUlJIoQDvvfnHKaI5GuU5i\nXmYn1ujWEqGEtBszZI8Em+n1JhgXGSniFuIRcCtifEMizVro5zuCW06sNSfHFysu\nXQgg4njnSwKBgG35tVGTX5ANYAIZ+RPAJ6gOAxCCjphzXhwH421rQIOD2ypiJGtV\n2WRflsGroAllLfYtAjyrEsYNRZwJrhxpxqgqybQUekj5rKNsNDgmRzGDl2GPKyBq\nkBymgwy2cQZaRlctZUlYQmcWL9sPTxEt69iyfjN0iQFI/CIRPm80gp+zAoGBALhQ\n6+wHHTEAdcnLaTJGr7mOjJn8bINlmWto2tcNR7FE6owvnNBvo/KIWeb4xqJwUoX/\n10pEn9EPt/9ORnoOatEvosD62ZdvH/yQqPOuMfWB4t36HAhM+aGIZM67JL5C/yiw\nnesbE1haBCBHPmhJOGQZAuE0j47nxI5JjmKeayATAoGAT0IgPq4Asz1fihXhzBMN\nNKsni86XWMN7VPrpWyX8olTl1KuhgB4LJB829fcl1crAy530raAnz95ya5YCZnUH\n8G73mU0kvB9cduq++vQoeEbo2YianGp/VrQ4Oivbke8Z6PHRLp5rAcXZDrkjMYCe\ne4raYmSbBiDvC23022defPE=\n-----END PRIVATE KEY-----\n",
//       "client_email": "cobamilestone@coba-milestone.iam.gserviceaccount.com",
//       "universe_domain": "googleapis.com"
//     },
//     scopes: ["https://www.googleapis.com/auth/spreadsheets"],
//   });

//   const glSheets = google.sheets({ version: "v4", auth: glAuth });

//   const response = await glSheets.spreadsheets.values.get({
//     spreadsheetId: "1VgHVYzeUVcjp5S7_qhhTj6CrIXMrqSbA5lrHVcbrxNg",
//     range: "Sheet1!A:D",
//   });

//   // Return the data
//   return response.data.values || [];
// }