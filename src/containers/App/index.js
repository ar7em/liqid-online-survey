import React from "react";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router";
import { ConnectedRouter, push } from "react-router-redux";
import Layout from "components/Layout";
import Navigate from "containers/Navigate";
import Progress from "containers/Progress";
import Stage from "containers/Stage";
import Summary from "containers/Summary";
import { store, history } from "store";

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Layout.Wrapper>
        <Layout.Cover>
          <Progress />
        </Layout.Cover>
        <Layout.Sidebar>
          <Navigate direction="prev" />
        </Layout.Sidebar>
        <Layout.Content>
          <Route path="/:stageIndex" component={Stage}/>
          <Summary/>
        </Layout.Content>
        <Layout.Sidebar>
          <Navigate direction="next" />
        </Layout.Sidebar>
      </Layout.Wrapper>
    </ConnectedRouter >
  </Provider>
);

export default App;
