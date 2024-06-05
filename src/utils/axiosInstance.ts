// src/utils/axiosInstance.ts
import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "../config/constants";
import AxiosMockAdapter from "axios-mock-adapter";
import { mockResponses } from "./mockingResponse";

type Methods = "get" | "post" | "put" | "delete" | "patch";

export const axiosInstance = (
  method: Methods,
  baseURL: string,
  data: string | object = {},
  token: string = ""
): Promise<object> => {
  const config: AxiosRequestConfig = {
    method,
    url: `${BASE_URL}/${baseURL}`,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  };

  if (method === "post" || method === "put") {
    config.data = data;
  } else if (method === "get" || method === "delete") {
    config.params = data;
  }

  return axios(config)
    .then((response) => response.data)
    .catch((error) => {
      console.error("API request error:", error);
      throw error;
    });
};

const mock = new AxiosMockAdapter(axios);

Object.keys(mockResponses).forEach((endpoint: string) => {
  const mockResponse = mockResponses[endpoint];
  if (mockResponse.status === 200) {
    mock.onGet(endpoint).reply(200, mockResponse.data);
    mock.onPost(endpoint).reply(200, mockResponse.data);
    mock.onPut(endpoint).reply(200, mockResponse.data);
    mock.onDelete(endpoint).reply(200, mockResponse.data);
  } else if (mockResponse.status === 404) {
    mock.onGet(endpoint).reply(404, mockResponse.data);
    mock.onPost(endpoint).reply(404, mockResponse.data);
    mock.onPut(endpoint).reply(404, mockResponse.data);
    mock.onDelete(endpoint).reply(404, mockResponse.data);
  }
});
