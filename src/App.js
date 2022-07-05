import React from "react";
import "./App.css";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import Select from "./components/UI/select/select";

function App() {
    const [posts, setPosts] = React.useState([
        {title:'Javascript', description:'Javascript is a language to create web applications', date: new Date().toLocaleDateString()},
        {title:'React JS', description:'JS Framework to create web apps and SPA', date: new Date('2025-12-2').toLocaleDateString()},
        {title:'C#', description:'With ReactJS and ASP.NET used to create web apps', date: new Date('2020-02-13').toLocaleDateString()},
    ]);

    const [selected, setSelected] = React.useState('');

    const addPost = (post) => {
        setPosts([...posts, post]);
    }

    const deletePost = (index) => {
        const newPosts = [...posts];
        newPosts.splice(index, 1);
        setPosts(newPosts);
    }

    const changeSort = (e) => {
        setSelected(e);
        setPosts([...posts.sort((a, b) => {
            return a[e] > b[e] ? 1 : -1;
        })])
    }

  return (
      <div className="App">
          <PostForm createPost={addPost} />
          <Select onChange={changeSort} defaultValue={'Sort'} options={[{value: 'title', name: 'By Title'}, {value: 'date', name: 'By Date'}]}/>

          <div className={'divider'}/>
          { posts.length !== 0 ? <PostList name={'Posts'} posts={posts} deletePost={deletePost} /> : <p className={'no_posts'}>No posts :(</p> }
    </div>
  );
}

export default App;
