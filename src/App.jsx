import { Showcase } from "./components/Features/Showcase/Showcase";
import { Todos } from "./components/Features/todos/Todos";
import { Navbar } from "./components/layout/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Showcase
        title={"Chase the new Flavour"}
        content={
          "Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus"
        }
      />
      <Todos />
    </>
  );
}

export default App;
