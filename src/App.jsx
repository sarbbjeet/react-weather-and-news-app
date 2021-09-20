import { Container } from "react-bootstrap";
import { Route, Switch } from "react-router";
import NavBar from "./components/common/NavBar";
import SearchByCity from "./components/searchByCity";
import News from "./components/News";
import store from "./store/configureStore";
import { Provider } from "react-redux";
import weatherDashboard from "./components/weatherDashboard";

function App() {
  return (
    // pass store to every component
    <Provider store={store}>
      <div className="bg-light" style={{ height: "100vh" }}>
        <NavBar />
        <Container>
          <Switch>
            <Route exact path="/weather" component={SearchByCity}></Route>
            <Route path="/news" component={News}></Route>
            <Route
              path="/weather/dashboard"
              component={weatherDashboard}
              // render={(props) => {
              //   return <WeatherDashboard {...props} />;
              // }}
            ></Route>
          </Switch>
        </Container>
      </div>
    </Provider>
  );
}

export default App;
