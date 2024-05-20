import { axiosInstance } from "../../apis/axios";

async function add(data = {}) {
    try {
      const response = await axiosInstance.post("subcategory", data);
  
      return response;
    } catch (error) {
      return error?.response;
    }
  }
  
  async function update( data = {}) {
    try {
      const response = await axiosInstance.patch(`subcategory/${data.id}`, data);
  
      return response;
    } catch (error) {
      return error?.response;
    }
  }
  
  async function getAll() {
    try {
      const response = await axiosInstance.get("subcategory");
  
      return response;
    } catch (error) {
      return error?.response;
    }
  }
  
  async function remove(id) {
    try {
      const response = await axiosInstance.delete(`subcategory/${id}`);
  
      return response;
    } catch (error) {
      return error?.response;
    }
  }
  
  export const subcategory = { add, update, remove, getAll };