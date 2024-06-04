import { loadState } from "@/config/store";
import { createSlice } from "@reduxjs/toolkit";

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
  likeItem: ProductType[];
  likeCount: number;
}

export const initialState: initialStateType = loadState("like") || {
  likeItem: [],
  likeCount: 0,
};

const like = createSlice({
  name: "like",
  initialState,
  reducers: {
    addLikeItem: (state, action) => {
      const identify = state.likeItem.find(
        (item) => item.id === action.payload.id
      );
      if (!identify) {
        return {
          ...state,
          likeItem: [...state.likeItem, { ...action.payload }],
        };
      }
      return state;
    },
    removeLikeItem: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        likeItem: state.likeItem.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    },
    likeItemCount: (state) => {
      return { ...state, likeCount: state.likeItem.length };
    },
  },
});

export const likeReducer = like.reducer;

export const { addLikeItem, removeLikeItem, likeItemCount } = like.actions;
