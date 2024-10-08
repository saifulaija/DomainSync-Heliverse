// import { configureStore } from "@reduxjs/toolkit";


// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// // import cartReducer from "./features/cart/cartSlice";
// // import sortReducer from "./features/sort/sortSlice";
// // import reviewReducer from "./features/review/reviewSlice";
// import orderReducer from "./features/order/orderSlice";
// import { baseApi } from "./api/baseApi";

// import sortReducer from "./features/sort/sortSlice";
// import reviewReducer from "./features/review/reviewSlice";
// import authReducer from "./features/auth/authSlice";
// import userReducer from "./features/user/userSlice";

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedAuthReducer = persistReducer(persistConfig, authReducer);
// const persistedReviewReducer = persistReducer(persistConfig, reviewReducer);
// const persistedOrderReducer = persistReducer(persistConfig, orderReducer);
// const persistedUserReducer = persistReducer(persistConfig, userReducer);

// export const store = configureStore({
//   reducer: {
//     [baseApi.reducerPath]: baseApi.reducer,
//     auth: persistedAuthReducer,
//     user: persistedUserReducer,
//     sort: sortReducer,
//     review: persistedReviewReducer,
//     order: persistedOrderReducer,
//   },

//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }).concat(baseApi.middleware),
// });

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;

// export const persistor = persistStore(store);




import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import orderReducer from "./features/order/orderSlice";
import { baseApi } from "./api/baseApi";

import reviewReducer from "./features/review/reviewSlice";
import authReducer from "./features/auth/authSlice";
import userReducer from "./features/user/userSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistedReviewReducer = persistReducer(persistConfig, reviewReducer);
const persistedOrderReducer = persistReducer(persistConfig, orderReducer);
const persistedUserReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: persistedAuthReducer,
    user: persistedUserReducer,
    review: persistedReviewReducer,
    order: persistedOrderReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

