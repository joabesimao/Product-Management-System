export interface HttpResponse {
  statusCode: number;
  body: unknown;
}

export interface HttpRequest<TParams = any, TBody = any> {
  body?: TBody;
  params?: TParams;
}
