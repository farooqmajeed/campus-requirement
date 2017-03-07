
export function Details(state=[],action)
{
    switch(action.type)
    {
        case "Donor":
        {
           
            return [action.data, ...state]
        }
        
        default: 
        return state
    }
}