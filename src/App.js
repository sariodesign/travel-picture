import React from 'react';
import Header   from './components/Header';
import Intro    from './components/Intro';
import PostList from './components/PostList';

function App() {
  return (
    <div className="site">
      <Header />
      <Intro />
      <PostList />
    </div>
  );
}

export default App;
