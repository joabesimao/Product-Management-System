export interface HttpResponse {
  statusCode: number;
  body: unknown;
}

export interface HttpRequest<TParams = any, TBody = any, TQuery = any> {
  query?: TQuery;
  body?: TBody;
  params?: TParams;
}
