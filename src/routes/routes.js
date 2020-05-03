import HomePage from "../pages/Home";
import CounterPage from "../pages/Counter";

const routes = [
  { title: "Home", path: "/", exact: true, component: HomePage },
  { title: "Counter", path: "/counter", exact: true, component: CounterPage },
];

export default routes;
