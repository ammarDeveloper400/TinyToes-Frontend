import { axiosInstance } from "../../utils/axiosInstance";
import { UserLogin, UserSignup } from "../../utils/schemas/authScehma";

export const login = async (data: UserLogin) => {
  try {
    const response = await axiosInstance(
      "post",
      "http://localhost/api/auth/login",
      data
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const signup = async (data: UserSignup) => {
  try {
    const response = await axiosInstance(
      "post",
      "http://localhost/api/auth/signup",
      data
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
