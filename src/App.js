import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Template from "./components/Template";
import MainBody from "./components/MainBody";
import CenteredTabs from "./components/Tabs";
import Question_form from "./components/Question_form";

function App() {
  return (
    <div className="App">
      <Header />
      <Template />
      <MainBody />
      <CenteredTabs/>
      <Question_form/>
    </div>
  );
}

export default App;
