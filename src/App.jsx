//import Validate from "./components/Validate/Validate";
import Dropdown from "./components/Dropdown/Dropdown";
//import Multiple from "./components/Multiple/Multiple";
import Uncontrolled from "./components/Uncontrolled/Uncontrolled";
import Controlled from "./components/Controlled/Controlled";
//import ReactHookForm from "./components/ReactHookForm/Example";
const App = () => {
  const divStyle = {
    background: 'linear-gradient(0deg, #CCCCCC, #888888)', // You can adjust gradient colors as needed
    minHeight: '100vh', // Set the minimum height for the gradient to cover the entire viewport
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={divStyle}>
      <h1>Employee Registration Form</h1>
      {<Controlled />}
      {<Dropdown />}
      {<Uncontrolled />}
    </div>
  );
};

export default App;
