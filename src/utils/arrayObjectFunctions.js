export const filter_array_obj_key_get_value_with_a_second_key= (array,firstKey,secondKey) => {

    let response = array.filter(item=> item[firstKey])[0][secondKey]

    return response
}