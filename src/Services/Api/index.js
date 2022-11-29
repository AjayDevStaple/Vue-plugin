import { url } from "../BaseURL";
import axiosApiInstance from "../Interceptor";

const outGetRegRegbasic = async (data) => {
  return await axiosApiInstance.post(`${url}api/his7/reg/websrv/outGetRegRegbasic`, data)
}


const outGetWebList = async (data) => {
  return await axiosApiInstance.post(`${url}api/his7/reg/websrv/outGetWebList`, data)
}



const outGetWebSchebasic = async (data) => {
  return await axiosApiInstance.post(`${url}api/his7/reg/websrv/outGetWebSchebasic`, data)
}

const outCheckFvRv = async (data) => {
  return await axiosApiInstance.post(`${url}api/his7/reg/websrv/outCheckFvRv` , data)
} 


export const _services = {
  outGetRegRegbasic ,
  outGetWebList,
  outGetWebSchebasic,
  outCheckFvRv
};
