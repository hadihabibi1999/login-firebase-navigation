
import {createStore} from "redux";

const reducer = function(initialSate=["hadi"] , action){
switch(action.type) {
    case "habibi":
    return [action.data]
    default :
    return 
}

}

function action(){
type:"habibi"
}

const store = createStore(reducer);

store.dispatch("hadi");

console.log(store.getState());