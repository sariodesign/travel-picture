import React  from 'react';
import axios  from 'axios';
import styled from '@emotion/styled';

const ContainerPost = styled.section `
  padding: 32px 16px;

  @media screen and (min-width: 640px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media screen and (min-width: 1280px) {
    padding: 64px 16px;
  }
`

const TitlePost = styled.h2 `
  bottom: 16px;
  color: #fff;
  cursor: pointer;
  font-family: var(--font-heading);
  font-size: 1.5rem;
  left: 16px;
  line-height: 2rem;
  margin: 0;
  position: absolute;
  text-transform: uppercase;
  word-wrap: break-word;

  span {
    background-repeat: no-repeat;
    background-image: linear-gradient(transparent calc(100% - 2px),#fff 2px);
    transition: .6s cubic-bezier(.215,.61,.355,1);
    background-size: 0 96%;
  }
`

const MediaPost = styled.figure `
  filter: grayscale(.5);
  height: 100%;
  margin: 0;
  position: relative;

  img {
    height: 100%;
    object-fit: cover;
    object-position: center;
    width: 100%
  }

  figcaption {
    background-color: var(--color-orange);
    border-radius: 8px 0 0;
    color: var(--color-white);
    font-family: var(--font-text);
    font-size: .75rem;
    font-weight: 700;
    left: 16px;
    line-height: 1;
    padding: 8px;
    position: absolute;
    text-transform: uppercase;
    top: 16px;
  }
`

const Post = styled.article `
  border-radius: 16px;
  box-shadow: 0 15px 20px -15px #222;
  cursor: pointer;
  margin: 0 auto 32px;
  max-height: 350px;
  overflow: hidden;
  position: relative;
  transition: filter .3 ease-in-out;

  @media screen and (min-width: 640px) {
    width: 48%;
  }
  
  @media screen and (min-width: 1024px) {
    width: 30%;
  }

  &:hover {
  }
`

export default class PostList extends React.Component  {
  state = {
    posts: [],
  };

  componentDidMount(){
    axios.get('https://www.sariodesign.it/blog/backend/wp-json/wp/v2/posts?_embed').then(res => {
      console.log(res);
      this.setState({ posts: res.data});
    })
  }

  render() {
    return <ContainerPost>{this.state.posts.map((post, index) =>
      <Post key={post.id}>
        <MediaPost>
          <img src={post._embedded['wp:featuredmedia']['0'].source_url} alt=""/>
          <figcaption>{post._embedded['wp:term']['0']['0'].name}</figcaption>
        </MediaPost>
        <TitlePost><span dangerouslySetInnerHTML={{__html: post.title.rendered }} /></TitlePost>
      </Post>)}
    </ContainerPost>;
  }

}