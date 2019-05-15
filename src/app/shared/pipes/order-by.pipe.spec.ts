import { OrderByPipe } from './order-by.pipe';

describe('OrderByPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderByPipe();
    expect(pipe).toBeTruthy();
  });

  it('should sort an array', () => {
    const pipe = new OrderByPipe();
    const testedArray = [
      { product: { name: 2, price: 1 } },
      { product: { name: 3, price: 2 } },
      { product: { name: 1, price: 3 } },
    ];
    const expectedArray = [
      { product: { name: 1, price: 3 } },
      { product: { name: 2, price: 1 } },
      { product: { name: 3, price: 2 } },
    ];
    expect(pipe.transform(testedArray, 'name')).toEqual(expectedArray);
  });
});
