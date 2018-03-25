import React from "react";
import { Provider } from "react-redux";
import Layout from "components/Layout";
import Navigate from "containers/Navigate";
import Progress from "containers/Progress";
import Stage from "containers/Stage";
import Summary from "containers/Summary";
import { store } from "store";

const App = () => (
  <Provider store={store}>
    <Layout.Wrapper>
      <Layout.Cover>
        <Progress />
      </Layout.Cover>
      <Layout.Sidebar>
        <Navigate direction="prev" />
      </Layout.Sidebar>
      <Layout.Content>
        <Stage/>
        <Summary/>
      </Layout.Content>
      <Layout.Sidebar>
        <Navigate direction="next" />
      </Layout.Sidebar>
    </Layout.Wrapper>
  </Provider>
);

export default App;
