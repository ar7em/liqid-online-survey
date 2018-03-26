import React from "react";
import { Provider } from "react-redux";
import { Route, Switch, Redirect } from "react-router";
import { ConnectedRouter } from "react-router-redux";
import Layout from "components/Layout";
import Navigate from "containers/Navigate";
import Progress from "containers/Progress";
import Stage from "containers/Stage";
import Summary from "containers/Summary";
import { store, history } from "store";
import * as routes from "routes";

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Layout.Wrapper>
        <Layout.Cover>
          <Progress />
        </Layout.Cover>
        <Layout.Content>
          <Switch>
            <Route path={routes.SUMMARY} component={Summary} />
            <Route path={routes.ANY_QUESTION} component={(route) => (
              <Stage questionIndex={routes.getIndexFromRoute(route)}/>
            )} />
            <Route component={() => (
              <Redirect to={{pathname: routes.FIRST_QUESTION}} />
            )} />
          </Switch>
        </Layout.Content>
        <Layout.Footer>
          <Layout.Sidebar>
            <Switch>
              <Route path={routes.SUMMARY} component={() => (
                <Navigate to={routes.LAST_QUESTION} label={"← Back to questions"} />
              )} />
              <Route path={routes.ANY_QUESTION} component={(route) => (
                routes.isFirstQuestion(route) ? null : <Navigate to={routes.getPrevQuestion(route)} label={"← Back"} />
              )} />
            </Switch>
          </Layout.Sidebar>
          <Layout.Sidebar>
            <Route path={routes.ANY_QUESTION} component={(route) => (
              routes.isLastQuestion(route) ?
                <Navigate label={"See Summary"} to={routes.SUMMARY} requireAnswerFor={routes.getIndexFromRoute(route)} /> :
                <Navigate label={"Next →"} to={routes.getNextQuestion(route)} requireAnswerFor={routes.getIndexFromRoute(route)} />
            )} />
          </Layout.Sidebar>
        </Layout.Footer>
      </Layout.Wrapper>
    </ConnectedRouter >
  </Provider>
);

export default App;
