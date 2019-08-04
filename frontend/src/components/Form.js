import React from 'react';
import { Form, Input, Button} from 'antd';
import axios from 'axios';
class CustomForm extends React.Component {

  handleFormSubmit = (event, requestType, articleID) => {

    const title = event.target.elements.title.value;
    const content = event.target.elements.content.value;
    const author = event.target.elements.author.value;
    const date = event.target.elements.date.value;
    const image = event.target.elements.image.value;

    switch(requestType){
      case 'post':
        axios.post('http://127.0.0.1:8000/api/', {
          title:title,
          content:content,
          author:author,
          created_at:date,
          image:image,
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));
        break;
      case 'put':
      axios.post(`http://127.0.0.1:8000/api/${articleID}/`, {
        title:title,
        content:content,
        author:author,
        created_at:date,
        image:image,
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));
    }
  }

  render() {
    return (
      <div>
        <Form onSubmit={(event) => this.handleFormSubmit(
          event,
          this.props.requestType,
          this.props.articleID,
        )}>
          <Form.Item label="Title">
            <Input name='title' placeholder="Put a title" />
          </Form.Item>
          <Form.Item label="Content">
            <Input name='content' placeholder="Put some content" />
          </Form.Item>
          <Form.Item label="Author">
            <Input name='author' placeholder="Author's name" />
          </Form.Item>
          <Form.Item label="CreatedAt">
            <Input name='date' placeholder="Put the date" />
          </Form.Item>
          <Form.Item label="Image">
            <Input name='image' placeholder="Image URL" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default CustomForm;
