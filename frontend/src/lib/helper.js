export const setErrorList = (error) => {
  let errorReturn = {
    message: "",
    errors: [],
  };
  try {
    let errorDetail = error.response?.data?.error;
    const status = error.response.status;
    let message = errorDetail?.message;
    let errorList = errorDetail?.details?.errors;
    if (message) {
      errorReturn.message = message;
      if (typeof errorList === "object") {
        // check weather the errorList is an object or an array, if it is an object then convert it to an array
        let errorArray = [];
        for (let key in errorList) {
          errorArray.push(errorList[key].message);
        }
        // @ts-ignore
        errorReturn.errors = errorArray;
      }
    } else {
      if (status >= 400 && status < 500) {
        errorReturn.message =
          "Invalid Input Detail provided, Please check all the details are correct";
      } else {
        errorReturn.message = "Invalid Error";
      }
    }
  } catch (e) {
    errorReturn.message = "Invalid Error";
  }
  return errorReturn;
};

export function convertReadableDateTime(dateString) {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    throw new Error("Invalid date string");
  }
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString(undefined, options);
}

export const getFirstLastLetter = (name) => {
  if (!name) return "NA";
  let nameArray = name.split(" ");
  let firstLetter = nameArray[0].charAt(0);
  let lastLetter =
    nameArray.length > 1
      ? nameArray[nameArray.length - 1].charAt(0)
      : nameArray[0].charAt(1);
  return firstLetter + lastLetter;
};
