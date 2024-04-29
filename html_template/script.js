// select dom elements
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// initial state
const initialState = {count : 0};

//action identifiers
const INCREMENT = 'increment';
const DECREMENT = 'decrement';

// action creators
const increment = (value) => {
    return {
        type: INCREMENT,
        payload: value
    }
}

const decrement = (value) => {
    return {
        type: DECREMENT,
        payload: value
    }
}


//  Reducer function
const counterReducer = (state = initialState, action) => {
    if(action.type === INCREMENT){
        return {...state, count: state.count + 1}
    }else if (action.type === DECREMENT){
        return {...state, count: state.count - 1}
    }else {
        return state;
    }
    
}


// Create Store
const store = Redux.createStore(counterReducer);


// Subscribe store
store.subscribe(showUI)

const showUI = () => {
    const state = store.getState();
    counterEl.onpointercancel = state;
}

// update UI initially
showUI();


// button click listeners
incrementEl.addEventListener('click', () => {
    store.dispatch(increment(2))
})

decrementEl.addEventListener('click', () => {
    store.dispatch(decrement(2))

})