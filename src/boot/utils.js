import { Platform } from "quasar";
import { useVisitorData } from "@fingerprintjs/fingerprintjs-pro-vue-v3";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import moment from "moment";

export const MAIN = "MAIN";

export const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
export const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};
export const getMobileOS = () => {
  const ua = navigator.userAgent;
  if (/android/i.test(ua)) {
    return "ANDROID";
  } else if (/iPad|iPhone|iPod/.test(ua)) {
    return "IOS";
  }
  return null;
};
export const getDevice = () => {
  return isMobile() ? "MOBILE" : "WEB";
};

export function isEmpty(obj) {
  if (typeof obj == "undefined" || obj == null || obj == "") {
    return true;
  } else {
    return false;
  }
}

export function isHuaweiPhone() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (/huawei/i.test(userAgent) && Platform.is.capacitor) {
    return true;
  }

  const huaweiDevicesRegex =
    /ALP-|AMN-|ANA-|ANE-|ANG-|AQM-|ARS-|ART-|ATU-|BAC-|BLA-|BRQ-|CAG-|CAM-|CAN-|CAZ-|CDL-|CDY-|CLT-|CRO-|CUN-|DIG-|DRA-|DUA-|DUB-|DVC-|ELE-|ELS-|EML-|EVA-|EVR-|FIG-|FLA-|FRL-|GLK-|HMA-|HW-|HWI-|INE-|JAT-|JEF-|JER-|JKM-|JNY-|JSC-|LDN-|LIO-|LON-|LUA-|LYA-|LYO-|MAR-|MED-|MHA-|MLA-|MRD-|MYA-|NCE-|NEO-|NOH-|NOP-|OCE-|PAR-|PIC-|POT-|PPA-|PRA-|RNE-|SEA-|SLA-|SNE-|SPN-|STK-|TAH-|TAS-|TET-|TRT-|VCE-|VIE-|VKY-|VNS-|VOG-|VTR-|WAS-|WKG-|WLZ-|JAD-|WKG-|MLD-|RTE-|NAM-|NEN-|BAL-|JAD-|JLN-|YAL/i;

  const isHuaweiDevice = huaweiDevicesRegex.test(navigator.userAgent);
  if (isHuaweiDevice && Platform.is.capacitor) {
    return true;
  }
  return false;
}

export function isAndroid() {
  if (Platform.is.android && Platform.is.capacitor) {
    return true;
  } else {
    return false;
  }
}

export const lsGet = (key, jsonParse = false) => {
  const value = localStorage.getItem(key) ?? "";

  return value && jsonParse ? JSON.parse(value) : value;
};

export const lsStore = (key, value, jsonStringfy = false) => {
  const n_value = jsonStringfy ? JSON.stringify(value) : value;

  localStorage.setItem(key, n_value);
};

export const lsRemove = (key) => localStorage.removeItem(key);

export const getTimeout = (key) => {
  const cached_timeout = lsGet(key) ?? 0;
  const now = new Date();

  return cached_timeout > now.getTime()
    ? Math.ceil((cached_timeout - now.getTime()) / 1000) // Seconds left
    : 0; // No timeout found
};

export const getImageUrl = (srcPath) => require(`/src/assets/${srcPath}`);

export const getVisitorId = async () => {
  const { getData } = useVisitorData({ extendedResult: true }, { immediate: false });

  const fp = await getData({ ignoreCache: true });

  // console.log("VisitorInfo");
  // console.log(fp);
  if (fp && fp.visitorId) {
    localStorage.setItem("VISITOR_ID", fp.visitorId);
    return fp.visitorId;
  } else {
    const fpPromise = FingerprintJS.load();
    const fp = await fpPromise;
    const result = await fp.get();
    const { timezone, ...allComponents } = result.components;
    // console.log(allComponents);
    const sidParam = FingerprintJS.hashComponents(allComponents);
    console.log("Use Normal Fingerprint");
    console.log(sidParam);
    localStorage.setItem("VISITOR_ID", sidParam);
    return sidParam;
  }
};

export const convertToCommaAmount = (amount, isForceDecimal) => {
  if (amount === null) {
    return 0;
  }
  if (isNonNumericString(amount)) {
    return amount;
  }
  const formattedAmount = isForceDecimal ? parseFloat(amount).toFixed(2) : parseInt(amount).toLocaleString("en-US");

  return isForceDecimal
    ? parseFloat(formattedAmount).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    : formattedAmount;
};
function isNonNumericString(value) {
  return typeof value === "string" && isNaN(value);
}

export const toGMT7 = (dateTime, format = "DD/MM/YYYY hh:mm A") => {
  return moment(dateTime).subtract(1, "hours").format(format);
};

export const isOperaPixelUrl = () => {
  if (
    window.location.href.indexOf("5svn88.com") > -1 ||
    window.location.href.indexOf("tfpromo88.com") > -1 ||
    window.location.href.indexOf("tf88bof.com") > -1 ||
    window.location.href.indexOf("tslotf88.com") > -1 ||
    window.location.href.indexOf("tfnohu18.com") > -1
  ) {
    return true;
  }
  return false;
};
