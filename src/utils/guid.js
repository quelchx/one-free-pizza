/**
 * @returns unique id -- this exported function does almost the extact
 * same as the react-uuid package but without the additional bundle.
 * For this use case this function will suit this application well
 */

/** @returns random string of 4 chars */
function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}

/** @returns random identification ex: b835-fee6-3641-d60d */
export default function guid() {
  return s4() + "-" + s4() + "-" + s4() + "-" + s4();
}

/**
 * functions are modified from Prashant Yadav
 * @https://learnersbucket.com/examples/javascript/unique-id-generator-in-javascript/#:~:text=Javascript%20does%20not%20have%20any,to%20generate%20unique%20random%20ids.
 */
