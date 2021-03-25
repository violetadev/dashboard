import { Method } from 'axios';

export interface IActionRequest {
  type: string;
  payload: {
    data: unknown;
    meta: {
      entity?: string;
      requestPayload?: unknown;
      httpCode?: number;
      extraData?: unknown;
    };
  };
}

export interface IRequestPayload {
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
