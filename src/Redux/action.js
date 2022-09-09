
export const Get_Data = "Get_data";

export const IS_Auth = "IS_Auth";
export const CartTotal="CartTotal"

export const is_auth  = (payload) => ({type:IS_Auth,payload})

export const get_data = (payload) => ({type:Get_Data,payload});

export const cartTotal =(payload)=>({type:CartTotal,payload})






