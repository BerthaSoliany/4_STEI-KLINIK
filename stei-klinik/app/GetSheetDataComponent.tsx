"use client";
import { getSheetData } from "@/app/actions/google-sheets.action";

export default function GetSheetDataComponent() {
  const handleOnGetSheetDataClick = async () => {
    try {
      const response = await getSheetData();
      console.log(response);
    } catch (error) {
      console.error("Error fetching sheet data:", error);
    }
  };

  return (
    <button onClick={handleOnGetSheetDataClick}>
      Get Sheet Data
    </button>
  );
}