import { axiosInstance } from "../../apis/axios";

async function add(data = {}) {
    try {
      const response = await axiosInstance.post("category", data);
  
      return response;
    } catch (error) {
      return error?.response;
    }
  }
  
  async function update( data = {}) {
    try {
      const response = await axiosInstance.patch(`category/${data.id}`, data);
  
      return response;
    } catch (error) {
      return error?.response;
    }
  }
  
  async function getAll() {
    try {
      const response = await axiosInstance.get("category");
  
      return response;
    } catch (error) {
      return error?.response;
    }
  }
  
  async function remove(id) {
    try {
      const response = await axiosInstance.delete(`category/${id}`);
  
      return response;
    } catch (error) {
      return error?.response;
    }
  }
  
  export const category = { add, update, remove, getAll };