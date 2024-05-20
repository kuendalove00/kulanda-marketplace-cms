import { axiosInstance } from "../../apis/axios";

async function add(data = {}) {
    try {
      const response = await axiosInstance.post("model", data);
  
      return response;
    } catch (error) {
      return error?.response;
    }
  }
  
  async function update(data = {}) {
    try {
      const response = await axiosInstance.patch(`model/${data.id}`, data);
  
      return response;
    } catch (error) {
      return error?.response;
    }
  }
  
  async function getAll() {
    try {
      const response = await axiosInstance.get("model");
  
      return response;
    } catch (error) {
      return error?.response;
    }
  }
  
  async function remove(id) {
    try {
      const response = await axiosInstance.delete(`model/${id}`);
  
      return response;
    } catch (error) {
      return error?.response;
    }
  }
  
  export const model = { add, update, remove, getAll };