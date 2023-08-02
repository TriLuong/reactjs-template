import { REFRESH_TOKEN_KEY, TOKEN_KEY } from "@/common/constants/auth";

export const getToken = () => {
  return typeof window !== "undefined"
    ? localStorage.getItem(TOKEN_KEY) ?? undefined
    : undefined;
};

export const setToken = (token?: string) => {
  return localStorage.setItem(TOKEN_KEY, token ?? "");
};

export const getRefreshToken = () => {
  return localStorage.getItem(REFRESH_TOKEN_KEY) ?? undefined;
};

export const setRefreshToken = (token?: string) => {
  return localStorage.setItem(REFRESH_TOKEN_KEY, token ?? "");
};

export const isTokenValid = (token?: string) => {
  return typeof token === "string" && token !== "";
};

export const isRefreshTokenValid = (token?: string) => {
  return typeof token === "string" && token !== "";
};
