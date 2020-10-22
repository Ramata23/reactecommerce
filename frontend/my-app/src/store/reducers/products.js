const initialState = {
    productlist: null,
    newproduct: null,
}
const usersReducer = (state = initialState, action) => {
 switch (action.type){
  case "FETCH_PRODUCTS":
    return{
            ...state,
            productlist:action.productlist,
            }
           
        case "ADD_PRODUCT":
            return{
            ...state,
            newproduct:action.newproduct,
            
            } 
            
         case "MODIFY_PRODUCT":
            return{
            ...state,
            newproduct:action.newproduct,
            
            }      
     }
}