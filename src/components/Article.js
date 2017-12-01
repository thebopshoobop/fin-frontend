import React from "react";
import PropTypes from "prop-types";
import { Header, Grid, Image } from "semantic-ui-react";

import Toggle from "./elements/Toggle";

const Article = article => (
  <Grid.Column mobile={16} tablet={16} computer={8}>
    <Grid>
      <Grid.Column width={12}>
        <Header href={article.url} target="_blank">
          {article.title}
          <Header.Subheader>
            {article.author} {article.published}
          </Header.Subheader>
        </Header>
        <Grid>
          <Grid.Column width={12}>{article.summary}</Grid.Column>
          <Grid.Column width={4} textAlign="right">
            <Toggle
              enabled={article.read}
              label="Unread"
              activeLabel="Read"
              color="purple"
            />
          </Grid.Column>
        </Grid>
      </Grid.Column>
      <Grid.Column width={4} textAlign="right">
        <Image size="small" src={article.image} />
      </Grid.Column>
    </Grid>
  </Grid.Column>
);

Article.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  read: PropTypes.bool,
  summary: PropTypes.string,
  author: PropTypes.string,
  published: PropTypes.string,
  image: PropTypes.string
};

export default Article;
