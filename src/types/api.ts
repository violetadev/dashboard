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
