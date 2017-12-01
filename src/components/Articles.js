import React from "react";
import PropTypes from "prop-types";
import { Header, Divider, Grid } from "semantic-ui-react";

import Article from "./Article";
import articles from "../lib/articles";

const datedArt = articles.map(article => {
  const published = article.published.split(", ");
  const date = published.slice(0, 3).join("-");
  const time = published.slice(3).join(":");
  article.published = new Date(Date.parse(`${date} ${time}`)).toLocaleString();
  return article;
});

const Articles = ({ fetching, articles }) => (
  <Grid>
    <Grid.Row>
      <Grid.Column>
        <Header as="h1">Everything</Header>
      </Grid.Column>
    </Grid.Row>
    <Divider />
    <Grid.Row>
      {datedArt.map(article => <Article {...article} key={article.url} />)}
    </Grid.Row>
  </Grid>
);

Articles.propTypes = {
  fetching: PropTypes.bool,
  articles: PropTypes.array
};

export default Articles;
