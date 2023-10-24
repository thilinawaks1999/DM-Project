import axios from "axios";

const baseUrl = "http://localhost:4000/poems";

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

export async function get(url: string) {
  try {
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function post(url: string, data: any) {
  try {
    const response = await axiosInstance.post(url, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
