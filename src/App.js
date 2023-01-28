import { Input } from "./Input";
import "./styles.css";

export default function App() {
  const getValue = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="App">
      <Input placeholder="Name" onChange={getValue} />
    </div>
  );
}
