import axios from 'axios';

const axiosService = axios.create({
    baseURL: process.env.VUE_APP_BACK_URL,
  });

  const axiosCall = async (method, url, params = {}, token = false, errorFunc=false) => {
    let axios = axiosService;
    let option = {}
    if (token !== false) {
        option['headers'] = {Authorization: `Bearer ${token.access_token}`}
    } else {
        option['withCredentials'] = true
    }
    let returnValue = {}
    switch (method) {
        case "GET":
            option.params = params
            await axios
            .get(url,option)
            .then((res) => {
                returnValue = res.data
            })
            .catch((err) => {
                if (errorFunc) {
                    errorFunc(err)
                } else {
                    return err
                }
            })
            break;

        case "POST": 
            await axios
            .post(url,params,option)
            .then((res) => {
                returnValue = res.data
            })
            .catch((err) => {
                if (errorFunc) {
                    errorFunc(err)
                } else {
                    return err
                }
            })
    }
    return returnValue
}


const apiObj = {
    axiosCall
}

export default apiObj;
