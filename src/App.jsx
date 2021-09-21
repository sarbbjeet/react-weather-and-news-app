import { Container } from "react-bootstrap";
import { Redirect, Route, Switch } from "react-router";
import NavBar from "./components/common/NavBar";
import SearchByCity from "./components/searchByCity";
import News from "./components/News";
import store from "./store/configureStore";
import { Provider } from "react-redux";
import WeatherDashboard from "./components/weatherDashboard";
import ProtectedRoute from "./components/common/protectedRoute";

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
            <ProtectedRoute
              path="/weather/dashboard"
              component={WeatherDashboard}
              redirect="/weather"
            />
            {/* <Route
              path="/weather/dashboard"
              render={(props) =>
                props.history.location.state ? (
                  <WeatherDashboard {...props} />
                ) : (
                  <Redirect to="/weather" />
                )
              }
            ></Route> */}
          </Switch>
        </Container>
      </div>
    </Provider>
  );
}

export default App;
