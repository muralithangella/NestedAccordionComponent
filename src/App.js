import "./styles.css";
import { accordionData } from "./json";
import AccordionData from "./AccordionData";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>

      <AccordionData items={accordionData} />
    </div>
  );
}
