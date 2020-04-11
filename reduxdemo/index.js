const redux = require("redux");

const createStore = redux.createStore;

const BUY_CAKE = 'BUY_CAKE';

function buyCake(){
    return {
        type:BUY_CAKE,
        info:"First Redux Action"
    }
}
const initialState = {
    numOfCakes:10
}

const reducer = (state=initialState,action)=>{
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes:state.numOfCakes - 1
        }
        default: return state;
    }
}

const Store = createStore(reducer);
console.log('Initial State',Store.getState());

const unsubscribe = Store.subscribe(()=>{
    console.log('updated State',Store.getState())
});

Store.dispatch(buyCake())
Store.dispatch(buyCake())
Store.dispatch(buyCake())
unsubscribe();