import Card from "./component/Card.jsx";
import "./index.css";

// import Header from "./Header";

function App() {
  return (
    <>
      <h1 className="text-3xl bg-green-300 p-3 rounded-md">
        Vite With TailwindCSS
      </h1>
      <Card userName="Sarah Dayan"></Card>
      <Card userName="Json" post="Data Enginner"></Card>
      <Card userName="Jack" post="BoCon"></Card>
      <Card></Card>
    </>
  );
}

export default App;
