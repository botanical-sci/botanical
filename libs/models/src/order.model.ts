export interface OrderResponseModel {
  data: {
    node: {
      id: string;
      name: string;
      orderNumber: number;
      processedAt: string;
      fulfillmentStatus: string;
      financialStatus: string;
      currentTotalPrice: {
        amount: string;
      };
      lineItems: {
        edges: [
          {
            node: {
              variant: {
                id: string;
                title: string;
                priceV2: {
                  amount: string;
                };
                image: {
                  src: string;
                };
              };
            };
          }
        ];
      };
    };
  };
}

interface OrderModel {
  id: string;
  name: string;
  orderNumber: number;
  processedAt: string;
  fulfillmentStatus: string;
  financialStatus: string;
  currentTotalPrice: {
    amount: string;
  };
  lineItems: {
    edges: [
      {
        node: {
          variant: {
            id: string;
            title: string;
            priceV2: {
              amount: string;
            };
            image: {
              src: string;
            };
          };
        };
      }
    ];
  };
}

export interface OrderStoreModel {
  order: OrderModel | null;
  initiate: (order: OrderModel | null) => void;
  getOrder: (id: string) => void;
}
