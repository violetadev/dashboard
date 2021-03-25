import axios from 'axios';
import { apiSuccess, apiError } from '../features/request/request.reducer';

const requester = (payload: any, dispatch: any): any => {
  const { entity, method, url, headers, extraData } = payload.meta;

  axios({ method, url, data: payload.data, headers })
    .then(res => {
      if (res.status >= 200 && res.status < 300) {
        dispatch(apiSuccess(res.data, entity, extraData, res.status));
      } else {
        dispatch(apiError(res.data, entity, extraData, payload, res.status));
      }
    })
    .catch(e => {
      if (e.response) {
        dispatch(apiError(e.response.data, entity, extraData, payload));
      } else {
        console.error(e);
      }
    });
};

export default requester;
