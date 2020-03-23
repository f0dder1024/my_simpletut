import {types} from './types';
import axios from 'axios';

const fetchPostsAction = () => async (dispatch) => {
  /**
   * http://jsonplaceholder.typicode.com/posts?_limit=10
   * 
   * Use localserver because main site was down
   */

  await axios.get('http://localhost:8080/posts?_limit=10')
  .then(res => {
    dispatch({
      type: types.GET_POSTS,
      payload: res.data
    })
  })
  .catch(err=>{
    console.log(`ERROR: ${err.message}`);
  })
}

export default fetchPostsAction;
