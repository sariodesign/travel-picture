import React from 'react';
import axios from 'axios';

export default class PostList extends React.Component  {
  state = {
    posts: [],
  };

  componentDidMount(){
    axios.get('https://www.sariodesign.it/blog/backend/wp-json/wp/v2/posts').then(res => {
      console.log(res);
      this.setState({ posts: res.data});
    })
  }

  render() {
  return <ul>{this.state.posts.map(post => <li>{post.title.rendered}</li>)}
    </ul>;
  }

}