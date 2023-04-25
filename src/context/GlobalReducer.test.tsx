import * as React from 'react';
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

    expect(
      GlobalReducer(
        {
          alertItem: { alertMessage: '', alertSeverity: 'success', isAlertOpen: false },
        },
        {
          type: GlobalReducerActionEnum.SET_ALERT_ITEM,
          payload: {
            alertItem: {
              alertMessage: 'Alert Message',
              alertSeverity: 'success',
              isAlertOpen: true,
            },
          },
        },
      ),
    ).toEqual({
      alertItem: {
        alertMessage: 'Alert Message',
        alertSeverity: 'success',
        isAlertOpen: true,
      },
    });

    // expect(
    //   GlobalReducer(
    //     {
    //       modalItem: {
    //         modalBody: null,
    //         modalTitle: '',
    //         handleSubmit: () => {},
    //         submitButtonColor: 'primary',
    //         submitButtonText: '',
    //         isModalOpen: false,
    //       },
    //     },
    //     {
    //       type: GlobalReducerActionEnum.SET_MODAL_ITEM,
    //       payload: {
    //         modalItem: {
    //           modalBody: null,
    //           modalTitle: 'Modal Title',
    //           handleSubmit: () => {},
    //           submitButtonColor: 'primary',
    //           submitButtonText: 'Continue',
    //           isModalOpen: true,
    //         },
    //       },
    //     },
    //   ),
    // ).toBe({
    //   modalItem: {
    //     modalBody: null,
    //     modalTitle: 'Modal Title',
    //     handleSubmit: () => {},
    //     submitButtonColor: 'primary',
    //     submitButtonText: 'Continue',
    //     isModalOpen: true,
    //   },
    // });
  });
});
