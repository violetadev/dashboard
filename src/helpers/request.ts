import axios, { Method } from 'axios';
import { apiSuccess, apiError } from '../features/request/request.reducer';

interface IPayload {
  entity: string;
  url: string;
  method: Method;
  body: unknown;
  headers: unknown;
  extraData: unknown;
  data: unknown;
  meta: {
    entity: string;
    method: Method;
    url: string;
    headers: unknown;
    extraData: unknown;
  };
}
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
