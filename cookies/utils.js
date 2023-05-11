const utils = {};

utils.removeUndefinedKeys = async (obj) => {
  try {
    Object.keys(obj).forEach((key) => {
      if (obj[key] === "-1" || obj[key] === -1) {
        obj[key] = null;
      } else if (obj[key] === undefined || obj[key] === "") {
        delete obj[key];
      }
    });
    return obj;
  } catch (e) {
    throw new Error(e.message);
  }
};

export default utils;
