import { Middleware } from 'redux';
import requester from '../../helpers/request';

import {
  API_ERROR,
  API_REQUEST,
  API_SUCCESS,
  setLoading,
} from './request.reducer';

const apiMiddleware: Middleware = ({ dispatch }) => next => action => {
  next(action);

  switch (true) {
    case action.type.includes(API_REQUEST):
      dispatch(setLoading(true, action.payload.meta.entity));
      requester(action.payload, dispatch);
      break;
    case action.type.includes(API_SUCCESS):
    case action.type.includes(API_ERROR):
      dispatch(setLoading(false, action.payload.meta.entity));
      break;
    default:
      break;
  }
  return next(action);
};

export default apiMiddleware;
