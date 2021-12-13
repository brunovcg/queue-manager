export const formdataArrayValues = (form) => {
  let array = [];
  for (let value of form.values()) {
    array.push(value);
  }

  return array;
};
