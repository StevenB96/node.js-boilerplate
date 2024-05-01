function Layout({
  children
}) {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: 'lightblue',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      }}>
      {children}
    </div>
  );
}

export default Layout;
