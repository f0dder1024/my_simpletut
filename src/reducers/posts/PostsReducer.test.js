import {types} from '../../actions/types';
import PostsReducer from './PostsReducer';


describe('Posts Reducer', ()=>{
  it('should return default state', ()=>{
    const newState = PostsReducer(undefined, {});
    expect(newState).toEqual([]);

  });

  it('should return new state when receiving expected type', ()=>{
    const posts = [
      {title: 'tests1'},
      {title: 'tests2'},
      {title: 'tests3'},
    ];
    const newState = PostsReducer(undefined, {
      type: types.GET_POSTS,
      payload: posts
    });
    expect(newState).toEqual(posts);
  })

})