import GlobalReducer from './GlobalReducer';
import { GlobalReducerActionEnum } from './GlobalReducer';

describe('Global Reducer tests', () => {
  it('handles Global Reducer', () => {
    expect(
      GlobalReducer(
        {
          myBag: [
            {
              menuItemID: 'hotCoffee',
              quantity: 1,
              dairy: '',
              flavor: '',
              sugar: true,
              size: 'med',
              ice: 'light',
              creamCheese: '',
              butter: '',
              name: 'Hot Coffee',
              orderID: `12345-menuItemID`,
              category: 'drinks',
              bottled: false,
              soda: false,
              subCategory: 'hotDrinks',
              menuItemImage: 'test.png',
            },
          ],
        },
        { type: null, payload: {} },
      ),
    ).toEqual({
      myBag: [
        {
          menuItemID: 'hotCoffee',
          quantity: 1,
          dairy: '',
          flavor: '',
          sugar: true,
          size: 'med',
          ice: 'light',
          creamCheese: '',
          butter: '',
          name: 'Hot Coffee',
          orderID: `12345-menuItemID`,
          category: 'drinks',
          bottled: false,
          soda: false,
          subCategory: 'hotDrinks',
          menuItemImage: 'test.png',
        },
      ],
    });

    expect(
      GlobalReducer(
        {
          myBag: [
            {
              menuItemID: 'hotCoffee',
              quantity: 1,
              dairy: '',
              flavor: '',
              sugar: true,
              size: 'med',
              ice: 'light',
              creamCheese: '',
              butter: '',
              name: 'Hot Coffee',
              orderID: `12345-menuItemID`,
              category: 'drinks',
              bottled: false,
              soda: false,
              subCategory: 'hotDrinks',
              menuItemImage: 'test.png',
            },
          ],
        },
        {
          type: GlobalReducerActionEnum.SET_MY_BAG,
          payload: {
            myBag: [
              {
                menuItemID: 'hotCoffee',
                quantity: 1,
                dairy: '',
                flavor: '',
                sugar: true,
                size: 'med',
                ice: 'light',
                creamCheese: '',
                butter: '',
                name: 'Hot Coffee',
                orderID: `12345-menuItemID`,
                category: 'drinks',
                bottled: false,
                soda: false,
                subCategory: 'hotDrinks',
                menuItemImage: 'test.png',
              },
            ],
          },
        },
      ),
    ).toEqual({
      myBag: [
        {
          menuItemID: 'hotCoffee',
          quantity: 1,
          dairy: '',
          flavor: '',
          sugar: true,
          size: 'med',
          ice: 'light',
          creamCheese: '',
          butter: '',
          name: 'Hot Coffee',
          orderID: `12345-menuItemID`,
          category: 'drinks',
          bottled: false,
          soda: false,
          subCategory: 'hotDrinks',
          menuItemImage: 'test.png',
        },
      ],
    });

    // expect(
    //   GlobalReducer(
    //     {
    //       myBag: [
    //         {
    //           menuItemID: 'hotCoffee',
    //           quantity: 1,
    //           dairy: '',
    //           flavor: '',
    //           sugar: true,
    //           size: 'med',
    //           ice: 'light',
    //           creamCheese: '',
    //           butter: '',
    //           name: 'Hot Coffee',
    //           orderID: `${new Date().getTime()}-menuItemID`,
    //           category: 'drinks',
    //           bottled: false,
    //           soda: false,
    //           subCategory: 'hotDrinks',
    //           menuItemImage: 'test.png',
    //         },
    //       ],
    //     },
    //     {
    //       type: 'SET_MY_BAG',
    //       payload: {
    //         myBag: {
    //           menuItemID: 'hotCoffee',
    //           quantity: 1,
    //           dairy: null,
    //           flavor: null,
    //           sugar: 'yes',
    //           size: 'med',
    //           ice: 'light',
    //           creamCheese: null,
    //           butter: null,
    //           name: 'Hot Coffee',
    //           orderID: `${new Date().getTime()}-menuItemID`,
    //           category: 'drinks',
    //           bottled: false,
    //           soda: false,
    //           subCategory: 'hotDrinks',
    //           menuItemImage: 'test.png',
    //         },
    //       },
    //     },
    //   ),
    // ).toEqual({
    //   alert: 'Test',
    //   fadeOut: true,
    // });
  });
});
