import axios, { AxiosRequestConfig } from "axios";
import { compile, parse } from "path-to-regexp";
import cloneDeep from "lodash/cloneDeep";
import { stringify } from "qs";
import { appActions } from "@/stores/app";
import { store } from "@/stores";
import { ROUTE } from "@/common/constants/routes";
import config from "@/config";
import { profileActions } from "@/stores/profile";
import { ILoginResponse } from "@/types/app";
import { getToken } from "@/utils/auth";
import history from "../history";
// import { useNavigate } from "react-router-dom";

const request = (
  url: string,
  options: AxiosRequestConfig & { isAuthorized?: boolean }
) => {
  const {
    data,
    baseURL,
    isAuthorized = true,
    headers = { "Content-Type": "application/json" },
  } = options;

  // const navigate = useNavigate();

  const cloneData = cloneDeep(data);

  try {
    let domain = "";
    const urlMatch = url.match(/[a-zA-z]+:\/\/[^/]*/);
    if (urlMatch) {
      [domain] = urlMatch;
      url = url.slice(domain.length);
    }

    const match = parse(url);
    url = compile(url)(data);

    for (const item of match) {
      if (item instanceof Object && item.name in cloneData) {
        delete cloneData[item.name];
      }
    }
    url = domain + url; //why do we need split the URL and then join it back together?
  } catch (e: any) {
    console.error(e?.message);
  }

  options.headers = {
    ...headers,
    version: process.env.VERSION,
    build_date: process.env.BUILD_DATE,
    isAuthorized,
  };
  options.url = url;
  options.baseURL = baseURL;
  if (options.method === "GET") {
    options.params = cloneData;
  } else {
    options.data = cloneData;
  }
  options.paramsSerializer = (params) => {
    return stringify(params, { arrayFormat: "repeat" });
  };

  return axios(options)
    .then((response) => {
      const { statusText, status, data } = response;

      const result = {
        success: true,
        message: statusText,
        statusCode: status,
        data,
      };

      return Promise.resolve(result);
    })
    .catch((error) => {
      const { status } = error.response || {};

      if (status === 401 || status === 403) {
        store.dispatch(appActions.onLogout());
        store.dispatch(profileActions.onLogout());
        // TODO
        history.push(ROUTE.UN_AUTHENTICATED);
      }

      if (status <= 504 && status >= 500) {
        // history.push("/500");
      }
      if (status >= 404 && status < 422) {
      }
      /* eslint-disable */
      return Promise.reject(error?.response?.data || error);
    });
};

axios.interceptors.request.use(
  function (config) {
    const token = getToken();

    if (
      config.headers.isAuthorized &&
      typeof token === "string" &&
      token !== ""
    ) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    delete config.headers["isAuthorized"];
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const _config = error?.config;

    if (error?.response?.status === 401 && !_config?.sent) {
      _config.sent = true;

      const result: ILoginResponse = await axios.get(config.BASE_URL, {
        url: `/api/v1/me/refresh_token`,
      });

      if (result?.token) {
        _config.headers = {
          ..._config.headers,
          authorization: `Bearer ${result?.token}`,
        };

        store.dispatch(appActions.saveToken(result));
      }

      return axios(_config);
    }

    return Promise.reject(error);
  }
);
export default request;
