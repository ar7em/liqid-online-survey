import React from "react";
import PropTypes from "prop-types";
import Layout from "components/Layout";
import Navigate from "containers/Navigate";
import Progress from "containers/Progress";
import Stage from "containers/Stage";

const App = () => (
  <Layout.Wrapper>
    <Layout.Cover>
      <Progress />
    </Layout.Cover>
    <Layout.Sidebar>
      <Navigate direction="prev" />
    </Layout.Sidebar>
    <Layout.Content>
      <Stage/>
    </Layout.Content>
    <Layout.Sidebar>
      <Navigate direction="next" />
    </Layout.Sidebar>
  </Layout.Wrapper>
);

App.propTypes = {
};

export default App;
