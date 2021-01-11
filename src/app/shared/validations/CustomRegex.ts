/**
 * All Regex for validation declared here.
 */
export let CustomRegex = {
  email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  allowNumberOnly: /^\+?\d{10,15}$/,
  postcode: /^[A-Za-z0-9- ]{4,10}$/,
  staff: /^([1-9]\d*)$/,
  allowAlphaNumericSpace: /^[A-Za-z- ]+$/,
  space: /^\S*$/,
  positiveNumberUptoTwoDecimal: /^\s*(?=.*[1-9])\d*(?:\.\d{1,2})?\s*$/,
  alphaNumericPassword: /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+){6,100}$/
}
