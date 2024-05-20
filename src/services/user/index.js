import { axiosInstance } from "../../apis/axios";

async function add(data = {}) {
  try {

    console.log(data);

    const response = await axiosInstance.post("user", data);

    return response;
  } catch (error) {
    return error?.response;
  }
}

async function update(data = {}) {
  try {
    const response = await axiosInstance.patch(`user/${data.id}`, data);

    return response;
  } catch (error) {
    return error?.response;
  }
}

async function getAll() {
  try {
    const response = await axiosInstance.get("user/all");

    return response;
  } catch (error) {
    return error?.response;
  }
}

async function remove(id) {
  try {
    const response = await axiosInstance.delete(`user/${id}`);

    return response;
  } catch (error) {
    return error?.response;
  }
}

export const user = { add, update, remove, getAll };
