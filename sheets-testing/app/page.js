"use client";
import Button from '../components/Button';

export default function Home() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to Next.js!</h1>
      <Button onClick={handleClick}>Click Me</Button>
    </div>
  );
}