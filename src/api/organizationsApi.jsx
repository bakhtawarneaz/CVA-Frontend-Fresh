import api from './axiosConfig';


export const fetchCountries = async () => {
    const response = await api.get('https://glist.its.com.pk/v1/fetch/countries'); 
    return response.data;
  };

export const createFormData = (data) => {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    return formData;
  };

export const createOrganization = async (formData) => {
    const response = await api.post('/backend/organization/register', formData);
    return response.data;
};



export default api;