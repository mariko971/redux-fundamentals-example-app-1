const initialState = {    
      status: 'All',
      colors: []    
  };

  export default function FiltersReducer(state=initialState, action){

    switch(action.type){
        case 'filters/statusFilterChanged':
            return {
                ...state,
                status: action.payload
            }
            case 'filters/colorFilterChanged':
            return {
                ...state,
                colors: [...state.colors, action.payload]
            }
            case 'filters/colorFilterRemoved':
            return {
                ...state,
                colors: state.colors.filter(color=>color !== action.payload)
            }
        default: return state;
    }
  }

 export const colorFilterChanged =(filter)=>{
      return{
          type:'filters/colorFilterChanged',
          payload:filter
      }
  }
 export const colorFilterRemoved =(filter)=>{
      return{
          type:'filters/colorFilterRemoved',
          payload:filter
      }
  }