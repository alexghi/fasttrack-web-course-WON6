
  import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>C16</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
          
        <Link to="/Login">Login</Link> |{" "}
        <Link to="/Home">Home</Link>
        
      </nav>
    </div>
  );
}