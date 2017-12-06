import React from "react";
import PropTypes from "prop-types";
import { Header, Grid, Image, Divider } from "semantic-ui-react";

import Toggle from "./elements/Toggle";

const Article = article => (
  <Grid.Column mobile={16} tablet={16} computer={8}>
    <Grid>
      <Grid.Column width={12}>
        <a href={article.url} target="_blank">
          <Header>
            {article.title}
            <Header.Subheader>
              {article.author} {article.published}
            </Header.Subheader>
          </Header>
          {article.summary}
        </a>
      </Grid.Column>
      <Grid.Column width={4} textAlign="right">
        <Toggle
          enabled={article.read}
          label="Unread"
          activeLabel="Read"
          color="purple"
          onToggle={e => console.log(article.title, article.id)}
        />
        <Image size="tiny" spaced="left" src={article.image} />
      </Grid.Column>
    </Grid>
    <Divider />
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
