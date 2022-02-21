import {createSlice, PayloadAction} from '@reactjs/toolkit'

interface CounterState{
    value:Number;

}

const initialState:CounterState = {
    value: 0,
};
const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        
    }
});

