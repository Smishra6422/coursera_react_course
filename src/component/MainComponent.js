import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import DishDetail from "./DishDetailComponent";
import Contact from "./ContactComponent";

import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";

import AboutUs from "./AboutComponent";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
    };
  }

  render() {
    const { dishes, comments, promotions, leaders } = this.state;

    const HomePage = () => {
      return (
        <Home
          dish={dishes.filter((dish) => dish.featured)[0]}
          promotion={promotions.filter((promo) => promo.featured)[0]}
          leader={leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };

    const DishWithId = ({ match }) => {
      return (
        <DishDetail
          dish={
            dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          comments={comments.filter(
            (comment) => comment.dishId === parseInt(match.params.dishId, 10)
          )}
        />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={dishes} />}
          />
          <Route exact path="/contactus" component={Contact} />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route
            path="/aboutus"
            component={() => <AboutUs leaders={leaders} />}
          />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
