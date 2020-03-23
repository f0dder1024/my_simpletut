import React from 'react';
import Header from './component/header/Header';
import Headline from './component/headline/Headline';
import SharedButton from './component/button/SharedButton';
import ListItem from './component/listItem/ListItem';
import {connect} from 'react-redux';
import fetchPostsAction from './actions/fetchPostsAction';
import './app.scss';

class App extends React.Component {
  constructor(props){
    super(props);
    this.fetch = this.fetch.bind(this);
  }

  fetch(){
    this.props.fetchPostsAction();
  }

  render(){
    const { posts } = this.props;
    const configButton = {
      buttonText: 'Get posts',
      emitEvent: this.fetch
    }
    return (
      <div className="App">
        <Header></Header>
        <section className="main">
          <Headline header="Posts" desc="Click the button to render posts!" />
          <SharedButton {...configButton}/>
          {posts.length > 0 &&
            <div>
              {posts.map((post)=>{
                const {title, body} = post;
                const configListItem = {
                  title,
                  description: body
                }
                return (<ListItem  key={title} {...configListItem}/>)
              })}
            </div>
          }
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.postsReducer
  }
}

export default connect(mapStateToProps, {fetchPostsAction})(App);
