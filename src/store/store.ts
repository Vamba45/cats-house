import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { catAPI } from "./service/catService.ts";

const rootReducer = combineReducers({
    [catAPI.reducerPath]: catAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(catAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch']