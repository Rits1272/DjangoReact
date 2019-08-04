import React from 'react';
import { List,Icon } from 'antd';

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const Article = (props) => {
  return (
  <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 3,
    }}
    dataSource={props.data}

    renderItem={item => (
      <List.Item
        key={item.title}
        actions={[
          <IconText type="star-o" text="156" />,
          <IconText type="like-o" text="156" />,
          <IconText type="message" text="2" />,
        ]}

        extra={
          <img
            width={272}
            alt="logo"
            src={item.image}
          />
        }
      >
        <h1><a href = {`/${item.id}`}>{item.title}</a></h1>
        <br />
        {item.content}
        <h3>Author - {item.author}</h3>
        <h5>Published At : {item.created_at}</h5>

      </List.Item>
    )}
  />
  );
}

export default Article;
