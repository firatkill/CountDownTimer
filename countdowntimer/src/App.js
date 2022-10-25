import AppCSS from "./App.module.css";
import {
  RiFacebookBoxFill,
  RiTwitterFill,
  RiPinterestFill,
  RiInstagramFill,
} from "react-icons/ri";
import Timer from "./Components/Timer/Timer";
function App() {
  const styled = AppCSS;
  return (
    <div className={styled.appContainer}>
      <h1 className={styled.header}>WE'RE LAUNCHING SOON</h1>
      <Timer />
      <div className={styled.icons}>
        <RiFacebookBoxFill className={styled.icon} />

        <RiTwitterFill className={styled.icon} />
        <RiPinterestFill className={styled.icon} />
        <RiInstagramFill className={styled.icon} />
      </div>
    </div>
  );
}

export default App;
