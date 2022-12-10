import React, { Component } from 'react';
// import qs from 'querystring';

const detailData = [
  { id: '1', content: 'content 1' },
  { id: '2', content: 'content 2' },
  { id: '3', content: 'content 3' },
];

export default class Detail extends Component {
  render() {
    // params
    // const { id, title } = this.props.match.params;

    // search
    // const { id, title } = qs.parse(this.props.location.search.slice(1));

    // state
    const { id, title } = this.props.location?.state || {};

    const messageDetail = detailData.find((detail) => detail.id === id) || {};
    return (
      <div>
        <div>ID: {id}</div>
        <div>TITLE: {title}</div>
        <div>CONTENT: {messageDetail.content}</div>
      </div>
    );
  }
}
