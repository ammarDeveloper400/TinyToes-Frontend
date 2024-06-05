export interface MockResponse<T> {
  status: number;
  data: T;
}

interface LoginResponse {
  success: boolean;
  token: string;
}

interface SignupResponse {
  success: boolean;
  token: string;
}

interface UserResponse {
  userId: number;
  username: string;
}

export const mockResponses: Record<string, MockResponse<unknown>> = {
  "http://localhost/api/auth/login": {
    status: 200,
    data: {
      success: true,
      token: "mocked-token",
    } as LoginResponse,
  },
  "http://localhost/api/auth/signup": {
    status: 200,
    data: {
      success: true,
      token: "mocked-token",
    } as SignupResponse,
  },
  "/users": {
    status: 200,
    data: {
      userId: 1,
      username: "john_doe",
    } as UserResponse,
  },
};
