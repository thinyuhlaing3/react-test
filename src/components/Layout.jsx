
const Layout = ({ children }) => {
  return (
    <div style={{width: 200,padding:10, backgroundColor: "lightblue", marginLeft: 200}}>
      <h1> Layout </h1>
      <div>{children}</div>
    </div>
  );
};

export default Layout;