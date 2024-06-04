import {
  configureStore,
  createListenerMiddleware,
  isAnyOf,
} from "@reduxjs/toolkit";
import { itemCount, productReducer } from "./reducer/product-reducer";
import {
  add,
  remove,
  toggleAnmount,
  totalPrice,
} from "./reducer/product-reducer";
import { saveState } from "@/config/store";
import { likeReducer } from "./reducer/like-reducer";

import {
  addLikeItem,
  removeLikeItem,
  likeItemCount,
} from "./reducer/like-reducer";
const storageMiddleware = createListenerMiddleware();

storageMiddleware.startListening({
  matcher: isAnyOf(add, remove, toggleAnmount),
  effect: (_, api) => {
    api.dispatch(totalPrice());
    api.dispatch(itemCount());
  },
});
storageMiddleware.startListening({
  matcher: isAnyOf(addLikeItem, removeLikeItem),
  effect: (_, api) => {
    // api.dispatch(addLikeItem());
    // api.dispatch(removeLikeItem());
    api.dispatch(likeItemCount());
  },
});

export const store = configureStore({
  reducer: {
    product: productReducer,
    like: likeReducer,
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware().prepend(storageMiddleware.middleware),
});

store.subscribe(() => {
  saveState("product", store.getState().product);
  saveState("like", store.getState().like);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
