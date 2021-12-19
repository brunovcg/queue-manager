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
  filter_obj_key_get_value_with_a_second_key: (array, firstKey, secondKey) => {
    let response = array.filter((item) => item[firstKey])[0][secondKey];

    return response;
  },

  updatedArrayState: (inicialState, id, data) => {
    let updated = inicialState.find((item) => item.id === id);
    let updatedKeys = Object.keys(data);
    for (let i = 0; i < updatedKeys.length; i++) {
      updated[updatedKeys[i]] = data[updatedKeys[i]];
    }
    return updated;
  },
};

export const masks= {
  takeOut: (cep="") => {
   

      return cep.replace(/\D/g, '')}


};
