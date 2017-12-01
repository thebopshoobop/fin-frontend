import React from "react";
import { Item } from "semantic-ui-react";

const Article = ({
  feed,
  id,
  url,
  title,
  author,
  published,
  summary,
  image
}) => (
  <Item>
    <Item.Content>
      <Item.Header as="a" href={url}>
        {title}
      </Item.Header>
      <Item.Meta>
        {author} {published}
      </Item.Meta>
      <Item.Description>{summary}</Item.Description>
      <Item.Image size="small" src={image} />
    </Item.Content>
  </Item>
);

export default Article;
