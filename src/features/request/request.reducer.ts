import { IActionRequest } from '../../types/api';

export const API_ERROR = 'API_ERROR';
export const API_REQUEST = 'API_REQUEST';
export const API_SUCCESS = 'API_SUCCESS';
export const SET_LOADING = 'SET_LOADING';

export const apiRequest = (
  entity: string,
  url: string,
  method: string,
  body?: unknown,
  headers?: unknown,
  extraData?: unknown
): any => ({
  type: `${entity} ${API_REQUEST}`,
  payload: {
    data: body,
    meta: {
      method,
      url,
      entity,
      headers,
      extraData,
    },
  },
});

export const apiSuccess = (
  response: unknown,
  entity: string,
  extraData: unknown,
  httpCode: number
): IActionRequest => ({
  type: `${entity} ${API_SUCCESS}`,
  payload: {
    data: response,
    meta: { entity, extraData, httpCode },
  },
});

export const apiError = (
  data: unknown,
  entity: string,
  extraData: unknown,
  requestPayload: unknown,
  httpCode = 0
): IActionRequest => ({
  type: `${entity} ${API_ERROR}`,
  payload: {
    data,
    meta: {
      entity,
      requestPayload,
      httpCode,
      extraData,
    },
  },
});

export const setLoading = (state: unknown, entity: string): any => ({
  type: `${entity} ${SET_LOADING}`,
  payload: {
    data: state,
    meta: { entity },
  },
});
