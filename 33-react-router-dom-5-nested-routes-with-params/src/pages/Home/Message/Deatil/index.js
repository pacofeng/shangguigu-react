import React, { Component } from 'react';

const detailData = [
  { id: '1', content: 'content 1' },
  { id: '2', content: 'content 2' },
  { id: '3', content: 'content 3' },
];

export default class Detail extends Component {
  render() {
    const { id, title } = this.props.match.params;
    const messageDetail = detailData.find((detail) => detail.id === id);
    return (
      <div>
        <div>ID: {id}</div>
        <div>TITLE: {title}</div>
        <div>CONTENT: {messageDetail.content}</div>
      </div>
    );
  }
}
