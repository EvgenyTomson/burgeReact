import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URI, POSTFIX } from "../../constants/urls";
import { countTotalCount, countTotalPrice } from "../../constants/utils";

const initialState = {
    orderList: JSON.parse(localStorage.getItem('order') || '[]'),
    orderGoods: [],
    totalPrice: 0,
    totalCount: 0,
    error: '',
};

export const localStorageMiddleware = store => next => action => {
    const nextAction = next(action);

    if(nextAction.type.startsWith('order/')) {
        const orderList = store.getState().order.orderList;
        localStorage.setItem('order', JSON.stringify(orderList));
    }

    return nextAction
}

export const orderRequestAsync = createAsyncThunk(
    'order/fetch',
    (_, {getState}) => {
        const listId = getState().order.orderList.map(item => item.id);
        return fetch(`${API_URI}/${POSTFIX}?list=${listId}`)
            .then(res => res.json())
            .catch(error => ({error}));
    }
)

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const productInOrderList = state.orderList.find(item => item.id === action.payload.id);

            if(productInOrderList) {
                productInOrderList.count += 1;
                const productInOrderGoods = state.orderGoods.find(item => item.id === action.payload.id);
                productInOrderGoods.count = productInOrderList.count;

                state.totalPrice = countTotalPrice(state.orderGoods);
                state.totalCount = countTotalCount(state.orderGoods);
            }else {
                // we can do pushes cos of slices
                state.orderList.push({...action.payload, count: 1})
                // state.orderList = [...state.orderList, {...action.payload, count: 1}];
            }
        },
        removeProduct: (state, action) => {
            const productInOrderList = state.orderList.find(item => item.id === action.payload.id);

            if(productInOrderList.count > 1) {
                productInOrderList.count -= 1;
                const productInOrderGoods = state.orderGoods.find(item => item.id === action.payload.id);
                productInOrderGoods.count = productInOrderList.count;

                state.totalPrice = countTotalPrice(state.orderGoods);
                state.totalCount = countTotalCount(state.orderGoods);
            }else {
                state.orderList = state.orderList.filter(item => item.id !== action.payload.id);
            }
        },
        clearOrder: (state) => {
            state.orderList = [];
            state.orderGoods = [];
        }
    },
    extraReducers: builder => {
        builder
            .addCase(orderRequestAsync.pending, state => {
                state.error = '';
            })
            .addCase(orderRequestAsync.fulfilled, (state, action) => {
                const orderGoods = state.orderList.map(item => {
                    const product = action.payload.find(prod => prod.id === item.id);
                    product.count = item.count;
                    return product
                });

                state.error = '';
                state.orderGoods = orderGoods;
                state.totalPrice = countTotalPrice(orderGoods);
                //orderGoods.reduce((total, item) => total + item.count * item.price, 0);
                state.totalCount = countTotalCount(orderGoods);
                //orderGoods.reduce((total, item) => total + item.count, 0);
            })
            .addCase(orderRequestAsync.rejected, (state, action) => {
                state.error = action.payload.error;            
            })
    }
});

export const { addProduct, removeProduct, clearOrder } = orderSlice.actions;
export default orderSlice.reducer;