"use server";
import Button from '../components/Button';
import { getSheetsData } from '../lib/readSheet';

export default async function Home() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  const data = await getSheetsData();
  console.log("data: ", data);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to Next.js!</h1>
      {/* <Button onClick={handleClick}>Click Me</Button> */}
      <div>
        {data.map((row, index) => (
          <div key={index}>
            {row[0]} - {row[1]}
          </div>
        ))}
      </div>
    </div>
  );
}