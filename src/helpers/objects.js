export function getIn(obj, arr, defaultValue = null){
    try{
        let result = obj;
        for (let key of arr){
            result = result[key];
        }
        return result;
    }
    catch (e) {
        return defaultValue;
    }
}