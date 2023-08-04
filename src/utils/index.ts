import _ from "lodash";

import history from "@/common/history";
import { parse } from "qs";
import { RcFile } from "antd/lib/upload";
import { IMenuItem, IMenus } from "@/types/app";

const { pathToRegexp } = require("path-to-regexp");

// export const { defaultLanguage } = i18n
// export const languages = i18n.languages.map(item => item.key)
export const languages: any[] = [];
export const defaultLanguage = "en";

/**
 * Query objects that specify keys and values in an array where all values are objects.
 * @param   {array}         array   An array where all values are objects, like [{key:1},{key:2}].
 * @param   {string}        key     The key of the object that needs to be queried.
 * @param   {string}        value   The value of the object that needs to be queried.
 * @return  {object|undefined}   Return frist object when query success.
 */
export function queryArray(array: any[], key: string, value: string) {
  if (!Array.isArray(array)) {
    return;
  }
  return array.find((item) => item[key] === value);
}

/**
 * Convert an array to a tree-structured array.
 * @param   {array}     array     The Array need to Converted.
 * @param   {string}    id        The alias of the unique ID of the object in the array.
 * @param   {string}    parentId       The alias of the parent ID of the object in the array.
 * @param   {string}    children  The alias of children of the object in the array.
 * @return  {array}    Return a tree-structured array.
 */
export function arrayToTree(
  array: IMenus,
  id = "id",
  parentId = "pid",
  children = "children"
) {
  const result: any[] = [];
  const hash = {};
  const data = _.cloneDeep(array);

  data?.forEach((item, index) => {
    // @ts-ignore
    hash[data[index][id]] = data[index];
  });
  console.log("**** test hash", hash);

  data?.forEach((item) => {
    // @ts-ignore
    const hashParent = hash[item[parentId]];
    if (hashParent) {
      !hashParent[children] && (hashParent[children] = []);
      hashParent[children].push(item);
    } else {
      result.push(item);
    }
  });
  return result;
}

/**
 * Adjust the router to automatically add the current language prefix before the pathname in push and replace.
 */
const myRouter = { ...history };

export const router = myRouter;

export function pathMatchRegexp(regexp: any, pathname: string) {
  return pathToRegexp(regexp).exec(pathname);
}

export function queryPathKeys(
  array: string[],
  current: string,
  parentId: string,
  id = "id"
) {
  const result = [current];
  const hashMap = new Map();
  // @ts-ignore
  array.forEach((item) => hashMap.set(item[id], item));

  const getPath = (current: string) => {
    const currentParentId = hashMap.get(current)[parentId];
    if (currentParentId) {
      result.push(currentParentId);
      getPath(currentParentId);
    }
  };

  getPath(current);
  return result;
}

/**
 * In an array of objects, specify an object that traverses the objects whose parent ID matches.
 * @param   {array}     array     The Array need to Converted.
 * @param   {string}    current   Specify the object that needs to be queried.
 * @param   {string}    parentId  The alias of the parent ID of the object in the array.
 * @param   {string}    id        The alias of the unique ID of the object in the array.
 * @return  {array}    Return a key array.
 */
export function queryAncestors(
  array: IMenuItem[],
  current: IMenuItem,
  parentId: string,
  id = "id"
) {
  const result = [current];
  const hashMap = new Map();
  // @ts-ignore
  array.forEach((item) => hashMap.set(item[id], item));

  const getPath = (current: IMenuItem) => {
    // @ts-ignore
    const currentParentId = hashMap.get(current[id])[parentId];
    if (currentParentId) {
      result.push(hashMap.get(currentParentId));
      getPath(hashMap.get(currentParentId));
    }
  };

  getPath(current);
  return result;
}

/**
 * Query which layout should be used for the current path based on the configuration.
 * @param   {layouts}     layouts   Layout configuration.
 * @param   {pathname}    pathname  Path name to be queried.
 * @return  {string}   Return frist object when query success.
 */
export function queryLayout(layouts: any, pathname: string) {
  let result = "public";

  const isMatch = (regepx: RegExp) => {
    return regepx instanceof RegExp
      ? regepx.test(pathname)
      : pathMatchRegexp(regepx, pathname);
  };

  for (const item of layouts) {
    let include = false;
    let exclude = false;
    if (item.include) {
      for (const regepx of item.include) {
        if (isMatch(regepx)) {
          include = true;
          break;
        }
      }
    }

    if (include && item.exclude) {
      for (const regepx of item.exclude) {
        if (isMatch(regepx)) {
          exclude = true;
          break;
        }
      }
    }

    if (include && !exclude) {
      result = item.name;
      break;
    }
  }

  return result;
}

export const maskCurrency = (value: string, maxLength = 12, radix = ",") => {
  const currencyRegExp = new RegExp(
    `(\\d{1,${maxLength - 3}})(,)?(\\d{2})`,
    "g"
  );
  return value?.replace(currencyRegExp, (match, p1, p2, p3) =>
    [p1, p3].join(radix)
  );
};

export const parseFromUrl = (url: string) => {
  if (url?.startsWith("?")) {
    const query = url?.substring(1);
    var value = parse(query);
    if (typeof value?.from === "string") {
      return value;
    }
  }
  return null;
};

export const getLocationID = (id: string) => {
  if (id.startsWith("test")) {
    const segs = id.split("_");
    return segs[1];
  }

  return id;
};

export const downloadFile = (url: string) => {
  const link = document.createElement("a");
  link.href = url;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const isValidPostCode = (value: any) => {
  return /\d{6}/.test(`${value}`);
};

export const snakeCaseToLowerCase = (str: string) => {
  var result = str.replace(/([_])/g, " ");
  return result.toLowerCase();
};

export const formatPhoneNumber = (phoneNumberString: string) => {
  var cleaned = ("" + phoneNumberString).replace(/\D/g, "");
  var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    var intlCode = match[1] ? "+1 " : "";
    return [intlCode, "(", match[2], ") ", match[3], "-", match[4]].join("");
  }
  return null;
};

// export const formatCurrency = new Intl.NumberFormat('en-US', {
//   style: 'currency',
//   currency: 'USD',
//   // maximumSignificantDigits: 2,

//   // These options are needed to round to whole numbers if that's what you want.
//   minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
//   maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
// });

export const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

export const formatMoney = (value: number) => {
  return value?.toLocaleString("it-IT", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
};

export const formatCurrency = (value: number) => {
  // let result = formatMoney(value);
  // result = `${result}`?.replace('USD', '')?.replace(',', '.');
  let result: any = value;
  result = aroundNumber(Number(result));

  result = formatMoney(result)?.replace("USD", "");

  return "$" + (result || 0);
};

export const aroundNumber = (value: number, toFixed?: number) => {
  const fixed = toFixed ? toFixed : 2;
  const result = value.toFixed(fixed).replace(/\.?0*$/, "");

  return result;
};

export const capitalizeFirstLetter = (str: string) => {
  return str?.charAt(0)?.toUpperCase() + str?.slice(1)?.toLowerCase();
};

export { default as classnames } from "classnames";
