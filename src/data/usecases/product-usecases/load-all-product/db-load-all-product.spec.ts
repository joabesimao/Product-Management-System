import { DbLoadAllProduct } from './db-load-all-product';
import {
  Product,
  ProductModel,
} from '../../../../domain/models/product/product';

import { LoadAllProductRepository } from '../../../protocols/db/product/load-all-product';

interface SutTypes {
  sut: DbLoadAllProduct;
  loadAllProductRepositoryStub: LoadAllProductRepository;
}

const makeProduct = (): ProductModel => ({
  name: 'any_name',
  description: 'any_description',
  price: 1,
  stock: 10,
  category: 'any_category',
  status: true,
});

const makeProductList = (): Product[] => [
  {
    id: 1,
    name: 'any_name',
    description: 'any_description',
    price: 1,
    stock: 10,
    category: 'any_category',
    status: true,
  },
  {
    id: 2,
    name: 'other_name',
    description: 'other_description',
    price: 1,
    stock: 10,
    category: 'other_category',
    status: true,
  },
];

const makeProductRepository = (): LoadAllProductRepository => {
  class LoadAllProductRepositoryStub implements LoadAllProductRepository {
    async loadAll(): Promise<Product[]> {
      return new Promise((resolve) => resolve(makeProductList()));
    }
  }
  return new LoadAllProductRepositoryStub();
};

const makeSut = (): SutTypes => {
  const loadAllProductRepositoryStub = makeProductRepository();
  const sut = new DbLoadAllProduct(loadAllProductRepositoryStub);
  return {
    sut,
    loadAllProductRepositoryStub,
  };
};

describe('DbLoadAllProduct Usecase', () => {
  test('Should call LoadAllProductRepository with correct values', async () => {
    const { sut, loadAllProductRepositoryStub } = makeSut();
    const loadAllSpy = jest.spyOn(loadAllProductRepositoryStub, 'loadAll');
    await sut.load();
    expect(loadAllSpy).toHaveBeenCalled();
  });

  test('Should load all product on success', async () => {
    const { sut } = makeSut();
    const productList = await sut.load();
    expect(productList).toEqual(makeProductList());
  });

  test('Should throw if LoadAllProductRepository throws', async () => {
    const { sut, loadAllProductRepositoryStub } = makeSut();
    jest
      .spyOn(loadAllProductRepositoryStub, 'loadAll')
      .mockReturnValueOnce(
        new Promise((resolve, reject) => reject(new Error(''))),
      );

    const promise = sut.load();
    await expect(promise).rejects.toThrow();
  });
});
