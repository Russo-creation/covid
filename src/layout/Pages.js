import React from "react";
import { Route, Switch } from "react-router-dom";

const MainPage = React.lazy(() => import("../pages/MainPage"));

const ErorrPage = React.lazy(() => import("../pages/ErrorPage"));

const Page = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={MainPage} />
        <Route component={ErorrPage} />
      </Switch>
    </>
  );
};

export default Page;
