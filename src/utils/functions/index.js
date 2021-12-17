export const dateFunctions = {
  stringToDateFormated: (string) => new Date(string).toLocaleDateString(),
};

export const dataFormFunctions = {
  valuesToArray: (form) => {
    let array = [];
    for (let value of form.values()) {
      array.push(value);
    }

    return array;
  },
};

export const arrayFunctions = {
  filter_obj_key_get_value_with_a_second_key: (
    array,
    firstKey,
    secondKey
  ) => {
    let response = array.filter((item) => item[firstKey])[0][secondKey];

    return response;
  },
};
