import Link from 'next/link';

function HomePage() {
  return (
    <div style={styles.container}>
      <div style={styles.topRightMenu}>
        <Link href="/register">register</Link>
      </div>
      <div style={styles.centeredContent}>
        <h1>Welcome to the Home Page</h1>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    position: 'relative' as 'relative',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topRightMenu: {
    position: 'absolute' as 'absolute',
    top: '10px',
    right: '20px',
  },
  centeredContent: {
    textAlign: 'center',
  },
};

export default HomePage;