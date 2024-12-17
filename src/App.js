import User from "./components/Person";
import Avatar from "./components/Avatar";
import Layout from "./components/Layout";
import "./App.css";

const App = () => {
  const testArray = [1, 2, 3, 4, 5];
  let num = 1
  const handleClick = () => {
    return num = num + 1
  };
  return (
    <div> 
      <h1> Main</h1>

      <Avatar/>
      <Avatar/>
      <Avatar/>

      {testArray.map((item) => (
        <h3>{item}</h3>
      ))}
      <p>{num}</p>
      <button onClick={handleClick}>Increase</button>
      <h3 className="color"> HELLO </h3>
      <h3 style={{ color: "white", width: 200, backgroundColor: "blueviolet" }}>
        WORLD
      </h3>
      <User name="Kyaw Kyaw" gender="male" age={35} />
      <User name="Su Su" gender="female" age={25} />

      <Layout> {/* Parent components */}
        {/* Child components */}
        <User name="Thu Ta" gender="male" age={35} />
        <User name="Thu Ta" gender="male" age={35} />
      </Layout>
      {/* App --> test(props) --> Acom (came as a object) */}
    </div>
  );
};
export default App; 
