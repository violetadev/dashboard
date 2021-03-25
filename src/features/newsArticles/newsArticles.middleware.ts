import { Middleware } from 'redux';
import { apiRequest } from '../request/request.reducer';

import { GET_NEWS } from './newsArticles.reducer';

const newsArticlesMiddleware: Middleware = ({ dispatch }) => next => action => {
  switch (action.type) {
    case GET_NEWS:
      action.payload.data.forEach(topic => {
        dispatch(
          apiRequest(
            GET_NEWS,
            `http://content.guardianapis.com/tags?q=${topic}&section?q=${topic}&api-key=${process.env.REACT_APP_THE_GUARDIAN_KEY}`,
            'GET',
            {},
            {},
            { topic }
          )
        );
      });
      break;
    default:
      break;
  }
  return next(action);
};

export default newsArticlesMiddleware;
