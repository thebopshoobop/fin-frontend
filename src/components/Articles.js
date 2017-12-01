import React from "react";
import { Header, Divider, Grid, Item } from "semantic-ui-react";

import Article from "./Article";
import articles from "../lib/articles";

const datedArt = articles.map(article => {
  const published = article.published.split(", ");
  const date = published.slice(0, 3).join("-");
  const time = published.slice(3).join(":");
  article.published = new Date(Date.parse(`${date} ${time}`)).toLocaleString();
  return article;
});

const Articles = ({ fetching, boardsToShow, lists, onAddList }) => (
  <Grid>
    <Grid.Row>
      <Header as="h1">Everything</Header>
    </Grid.Row>
    <Divider />
    <Grid.Row>
      <Item.Group>
        {datedArt.map(article => <Article {...article} key={article.url} />)}
      </Item.Group>
    </Grid.Row>
  </Grid>
);

export default Articles;
