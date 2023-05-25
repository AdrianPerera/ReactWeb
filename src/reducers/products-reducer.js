export default  function productsReducer(state = [], {type, payload}) {
    switch (type){
        case "updateProduct":
            return [...state,...payload];
        default:
            return state;
    }
}
