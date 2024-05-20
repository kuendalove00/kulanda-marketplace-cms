import { axiosInstance } from "../../apis/axios";

async function add(data = {}) {
  try {
    const response = await axiosInstance.post("store", data);

    return response;
  } catch (error) {
    return error?.response;
  }
}

async function addCustomization(data = {}) {
  try {
    const response = await axiosInstance.post("customization", data);

    return response;
  } catch (error) {
    return error?.response;
  }
}

async function update(id, data = {}) {
  try {
    const response = await axiosInstance.patch(`store/${data.id}`, data);

    return response;
  } catch (error) {
    return error?.response;
  }
}

async function updateCustomization(data = {}) {
  try {
    const response = await axiosInstance.patch(`customization/${data.id}`, data);

    return response;
  } catch (error) {
    return error?.response;
  }
}

async function getCustomization(id) {
  try {
    const response = await axiosInstance.get(`customization/${id}`);

    return response;
  } catch (error) {
    return error?.response;
  }
}

async function getAll() {
  try {
    const response = await axiosInstance.get("store");

    return response;
  } catch (error) {
    return error?.response;
  }
}



async function getOne(id) {
  try {
    const response = await axiosInstance.get(`store/${id}`);

    return response;
  } catch (error) {
    return error?.response;
  }
}

async function remove(id) {
  try {
    const response = await axiosInstance.delete(`store/${id}`);

    return response;
  } catch (error) {
    return error?.response;
  }
}

export const store = { add, update,  remove, getOne, getAll, getCustomization, addCustomization, updateCustomization };
