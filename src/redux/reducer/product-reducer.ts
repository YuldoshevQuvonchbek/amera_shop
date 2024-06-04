import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { loadState } from "@/config/store";

interface ProductType {
  id: number;
  title: string;
  price: number;
  is_available: boolean;
  description: string;
  category: string;
  product: number;
  attribute_value: [];
  images: {
    order: number;
    image: string;
  }[];
  userCount: number;
  userPrice: number;
  other_detail: string;
  price_with_discount: string;
  quantity: number;
}

interface initialStateType {
  products: ProductType[];
  count: number;
  totalPrice: number;
}

export const initialState: initialStateType = loadState("product") || {
  products: [],
  count: 0,
  totalPrice: 0,
};

const product = createSlice({
  name: "product",
  initialState,
  reducers: {
    totalPrice: (state) => {
      const count = state.products.reduce((a, b) => {
        return a + b.userPrice;
      }, 0);

      return { ...state, totalPrice: count };
    },
    add: (state, action: PayloadAction<ProductType>) => {
      const idf = state.products.find((item) => item.id === action.payload.id);
      if (!idf) {
        return {
          ...state,
          products: [
            ...state.products,
            {
              ...action.payload,
              userCount: 1,
              userPrice: parseInt(action.payload.price.toString()),
            },
          ],
        };
      }
      return state;
    },
    remove: (state, action) => {
      return {
        ...state,
        products: state.products.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    },
    toggleAnmount: (state, action) => {
      if (action.payload.type === "add") {
        const newProducts = state.products.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              userCount: item.userCount + 1,
              userPrice: (item.userCount + 1) * item.price,
            };
          }
          return item;
        });
        return { ...state, products: newProducts };
      }
      if (action.payload.type === "remove") {
        const newProducts = state.products.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              userCount: item.userCount - 1,
              userPrice: (item.userCount - 1) * item.price,
            };
          }
          return item;
        });
        return { ...state, products: newProducts };
      }
    },
    itemCount: (state) => {
      return { ...state, count: state.products.length };
    },
  },
});

export const productReducer = product.reducer;

export const { add, remove, toggleAnmount, totalPrice, itemCount } =
  product.actions;
