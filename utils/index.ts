export const isFirestoreTimestamp = (val: any) => {
  if (
    val instanceof Object &&
    "nanoseconds" in val &&
    "seconds" in val &&
    Object.keys(val).length == 2
  )
    return true;
  return false;
};

export const firestoreTimestampToDate = (val: any) => {
  return new Date(val.seconds * 1000 + val.nanoseconds / 1000000);
};

/**
 * Convert a Firestore DocumentData object to a JS object.
 * Also converts Firestore Timestamps to JS Dates.
 */
export const docToJson = (data: any | any[]) => {
  let jsObject: any;
  if (Array.isArray(data)) jsObject = [];
  else jsObject = {};

  if (typeof data !== "object") return data;

  for (const key in data) {
    const val = data[key];

    if (val instanceof Date) {
      jsObject[key] = val;
    } else if (val?.toDate instanceof Function) {
      jsObject[key] = val.toDate();
    } else if (isFirestoreTimestamp(val)) {
      jsObject[key] = firestoreTimestampToDate(val);
    } else if (Array.isArray(val)) {
      jsObject[key] = val.map((item) => docToJson(item));
    } else if (val instanceof Object) {
      jsObject[key] = docToJson(val);
    } else {
      jsObject[key] = val;
    }
  }

  return jsObject;
};
