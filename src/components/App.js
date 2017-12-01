import React from "react";
import { Container } from "semantic-ui-react";

import SiteHeader from "./SiteHeader";
import Articles from "./Articles";

const App = () => (
  <div>
    <SiteHeader />
    <Container>
      <Articles />
    </Container>
  </div>
);

export default App;
