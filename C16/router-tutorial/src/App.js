import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  useNavigate,
  useLocation,
  useParams,
} from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<HomeWithRouter />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.onUsernameChanged = this.onUsernameChanged.bind(this);
    this.onPasswordChanged = this.onPasswordChanged.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  onUsernameChanged(e) {
    this.setState({ username: e.target.value });
  }

  onPasswordChanged(e) {
    this.setState({ password: e.target.value });
  }

  onClick() {
    //  let navigate=useNavigate()
    //  navigate('/about')
    this.props.router.navigate("/dashboard");
  }

  render() {
    return (
      <>
        <main>
          <h2>Welcome to the homepage!</h2>
          <p>You can do this, I believe in you.</p>
        </main>
        <div className="home-container">
          <label>Username </label>
          <input
            placeholder=" username "
            type="text"
            value={this.state.username}
            onChange={this.onUsernameChanged}
          />
          <p></p>
          <label>Password </label>
          <input
            placeholder=" password "
            type="password"
            value={this.state.password}
            onChange={this.onPasswordChanged}
          />
          <p></p>
          <button
            style={{ backgroundColor: "greenyellow" }}
            onClick={this.onClick}
          >
            {" "}
            Log In{" "}
          </button>
        </div>
      </>
    );
  }
}

const HomeWithRouter = withRouter(Home);

function Dashboard() {
  return (
    <div>
      <main>
        <h2>Dashboard</h2>
        <Outlet />
      </main>
      <nav>
        <Link to="/dashboard">Home</Link>
        <br></br>
        <Link to="/dashboard/settings">Settings</Link>
      </nav>
    </div>
  );
}

function DashboardHome() {
  return (
    <div>
      <h3>Here is the Dashboard Home</h3>
    </div>
  );
}

function Settings() {
  return (
    <div>
      <h3>Here are the Settings</h3>
    </div>
  );
}

export default App;

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}
