import { axiosInstance } from "../../apis/axios";

async function add(data = {}) {
    try {
      const response = await axiosInstance.post("brand", data);
  
      return response;
    } catch (error) {
      return error?.response;
    }
  }
  
  async function update( data = {}) {
    try {
      const response = await axiosInstance.patch(`brand/${data.id}`, data);
  
      return response;
    } catch (error) {
      return error?.response;
    }
  }
  
  async function getAll() {
    try {
      const response = await axiosInstance.get("brand");
  
      return response;
    } catch (error) {
      return error?.response;
    }
  }
  
  async function remove(id) {
    try {
      const response = await axiosInstance.delete(`brand/${id}`);
  
      return response;
    } catch (error) {
      return error?.response;
    }
  }
  
  export const brand = { add, update, remove, getAll };