// const store = {
//     name: 'hadi',
//     properties: {
//         hobby: 'programming',
//         age: 20,
//     },
//     friends: ['ali'],
//     girlFriends: ['Anna', 'Tania', 'Sara', 'Sanaz', 'Elmira', 'Negin', 'Mahsa']
// };



import { createStore, combineReducers } from 'redux';


const reducerOne = function (initialState = ['hadi'], action){
    switch(action.type){
        case 'NEW_GIRL_FRIEND':
            return [...initialState, action.data];
        default:
            return initialState;
    }
}

const reducerTwo = function (initialState = ['hadi'], action) {
    switch (action.type) {
        case 'NEW_GIRL_FRIEND':
            return [...initialState, action.data];
        default:
            return initialState;
    }
}

const reducers = combineReducers({
    reducerOne,
    reducerTwo
});



const store = createStore(reducers);

function action(girl) {
    return {
        type: 'NEW_GIRL_FRIEND', //required
        girl //optional
    };
}

console.log(store.getState());
/**
 * {
 *  reducerOne: ['hadi']
 *  reducerTwo: ['hadi']
 * }
 */


 store.dispatch(action('Karine'));


 console.log(store.getState());
/**
 * {
 *  reducerOne: ['hadi', 'Karine']
 *  reducerTwo: ['hadi', 'Karine']
 * }
 */
