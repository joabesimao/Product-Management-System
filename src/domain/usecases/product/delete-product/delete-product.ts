export interface DeleteProductById {
  delete(id: number): Promise<string>;
}

export const DeleteProductToken = 'DeleteProductToken';
