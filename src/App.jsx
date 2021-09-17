import { Container } from "react-bootstrap";
import { Route, Switch } from "react-router";
import NavBar from "./components/common/NavBar";
import SearchByCity from "./components/searchByCity";
import News from "./components/News";
import WeatherDashboard from "./components/weatherDashboard";

function App() {
  return (
    <div className="bg-light" style={{ height: "100vh" }}>
      <NavBar />
      <Container>
        <Switch>
          <Route exact path="/weather" component={SearchByCity}></Route>
          <Route path="/news" component={News}></Route>
          <Route path="/weather/dashboard" component={WeatherDashboard}></Route>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
