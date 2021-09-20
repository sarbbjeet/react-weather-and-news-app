import { Container } from "react-bootstrap";
import { Route, Switch } from "react-router";
import NavBar from "./components/common/NavBar";
import SearchByCity from "./components/searchByCity";
import News from "./components/News";
import WeatherDashboard from "./components/weatherDashboard";
import StoreContext from "./contexts/storeContext";
import store from "./store/configureStore";

function App() {
  return (
    // pass store to every component
    <StoreContext.Provider value={store}>
      <div className="bg-light" style={{ height: "100vh" }}>
        <NavBar />
        <Container>
          <Switch>
            <Route exact path="/weather" component={SearchByCity}></Route>
            <Route path="/news" component={News}></Route>
            <Route
              path="/weather/dashboard"
              component={WeatherDashboard}
            ></Route>
          </Switch>
        </Container>
      </div>
    </StoreContext.Provider>
  );
}

export default App;
