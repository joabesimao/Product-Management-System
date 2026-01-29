export interface DeleteProductRepository {
  delete(id: number): Promise<string>;
}

export const DeleteProductRepositoryToken = 'DeleteProductRepositoryToken';
