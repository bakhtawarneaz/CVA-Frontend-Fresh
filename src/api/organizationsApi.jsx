import api from './axiosConfig';

export const fetchCountries = async () => {
    const response = await api.get('https://glist.its.com.pk/v1/fetch/countries'); 
    return response.data;
};


export const createOrganization = async (data,token) => {
    const response = await api.post('/backend/organization/register', data,{
        headers: {
            'xt-client-token': token
        }
    });
    return response.data;
};

//export default api;