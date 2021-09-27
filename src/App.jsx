import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Route, Switch } from "react-router";
import NavBar from "./components/common/NavBar";
import CustomPlacesSearch from "./components/customPlacesSearch";
import News from "./components/news";
import "./App.css";

import store from "./store/configureStore";
import { Provider } from "react-redux";
import WeatherDashboard from "./components/weatherDashboard";
import ProtectedRoute from "./components/common/protectedRoute";
import { addCardHeader } from "./store/newsStore";

function App() {
  useEffect(() => {
    //card header items added to store==> news
    store.dispatch(addCardHeader({ id: 1, name: "Bussiness", active: true }));
    store.dispatch(addCardHeader({ id: 2, name: "Sport", active: false }));
    store.dispatch(addCardHeader({ id: 3, name: "Movies", active: false }));
    store.dispatch(addCardHeader({ id: 4, name: "Politics", active: false }));
  }, []);
  return (
    // pass store to every component
    <Provider store={store}>
      <div
        style={{
          height: "100vh",
          // backgroundImage: "url('/images/pikist.jpg')",
          // backgroundPosition: "center",
          // backgroundRepeat: "no-repeat",
          // backgroundSize: "cover",
        }}
      >
        <NavBar bgColor="rgba(14, 126, 255, 0.6)" fontColor="#ffffff" />
        <Container
          style={{ height: "80%", display: "flex", justifyContent: "center" }}
        >
          <Switch>
            <Route exact path="/weather" component={CustomPlacesSearch}></Route>
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
