import { LoadAllProductController } from './load-all-product-controller';
import { HttpRequest } from '../../../protocols/http/http';
import { ok, serverError } from '../../../helpers/http/http-helper';
import {
  Product,
  ProductModel,
} from '../../../../domain/models/product/product';
import { LoadAllProduct } from '../../../../domain/usecases/product/load-all-product/load-all-product';

const makeFakeRequest = (): HttpRequest => ({
  body: makeFakeProductModel(),
});

const makeFakeProduct = (): Product[] => [
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

const makeFakeProductModel = (): ProductModel => ({
  name: 'any_name',
  description: 'any_description',
  price: 1,
  stock: 10,
  category: 'any_category',
  status: true,
});

interface SutTypes {
  sut: LoadAllProductController;
  loadAllProductStub: LoadAllProduct;
}
const makeLoadAllProductStub = (): LoadAllProduct => {
  class LoadAllProductStub implements LoadAllProduct {
    async load(): Promise<Product[]> {
      return new Promise((resolve) => resolve(makeFakeProduct()));
    }
  }
  return new LoadAllProductStub();
};

const makeSut = (): SutTypes => {
  const loadAllProductStub = makeLoadAllProductStub();
  const sut = new LoadAllProductController(loadAllProductStub);
  return {
    sut,
    loadAllProductStub,
  };
};

describe('LoadAllProduct Controller', () => {
  test('Should call LoadAllProduct with correct values', async () => {
    const { sut, loadAllProductStub } = makeSut();
    const loadAllProductSpy = jest.spyOn(loadAllProductStub, 'load');
    const fakeRequest = makeFakeRequest();
    await sut.handle(fakeRequest);
    expect(loadAllProductSpy).toHaveBeenCalled();
  });

  test('Should return 500 if LoadAllProduct throws', async () => {
    const { sut, loadAllProductStub } = makeSut();
    jest
      .spyOn(loadAllProductStub, 'load')
      .mockReturnValueOnce(
        new Promise((resolve, reject) => reject(new Error()) as any),
      );
    const fakeRequest = makeFakeRequest();
    const httpResponse = await sut.handle(fakeRequest);
    expect(httpResponse).toEqual(serverError(new Error()));
  });

  test('Should load all Product and return 200 on sucess', async () => {
    const { sut } = makeSut();
    const httpResponse = await sut.handle(makeFakeRequest());
    expect(httpResponse).toEqual(ok(makeFakeProduct()));
  });
});
