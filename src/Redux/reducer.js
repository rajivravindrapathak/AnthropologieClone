
import { Get_Data,IS_Auth ,CartTotal} from "./action";


const initstate = {
   data:"",
   cartt:0
}


export const reducer = (store= initstate,{type,payload}) => {
    switch(type){
        case Get_Data:
            return({store,data:payload})
            case CartTotal:
                return({...store,cartt:payload})
           default:
               return store   
    }
}