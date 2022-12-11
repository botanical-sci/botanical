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
              title: string;
              originalTotalPrice: {
                amount: string;
              };
              variant: {
                image: {
                  url: string;
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
          title: string;
          originalTotalPrice: {
            amount: string;
          };
          variant: {
            image: {
              url: string;
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
