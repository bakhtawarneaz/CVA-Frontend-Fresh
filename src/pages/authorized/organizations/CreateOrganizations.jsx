import React, { useEffect } from 'react'
import './Organizations.css'
import Button from '../../../components/Button'
import { useForm } from 'react-hook-form';
import { useMutation, useQuery } from '@tanstack/react-query';
import { createOrganization, createFormData, fetchCountries } from '../../../api/organizationsApi';
import { useTypedSelector } from '../../../hooks/hooksType';


const CreateOrganizations = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const user = useTypedSelector((state) => state.auth);

    const { data: countries } = useQuery({
        queryKey: ['countries'],
        queryFn: fetchCountries
    });

    const mutation = useMutation({
        mutationFn:createOrganization,
        onSuccess: (data) => {
          console.log('Form submitted successfully', data);
        },
        onError: (error) => {
          console.error('Error submitting form', error);
        },
      });
    
    // const onSubmit = (data) => {
       
    //     const formData = createFormData(data);
    //     mutation.mutate(formData);
    // };   

    const onSubmit = (data) => {
       
        const selectedCountry = countries.find(country => country.name === formData.country);
            if (!selectedCountry) {
            console.error('Selected country not found');
            return;
        }

        const organizationData = {
            ...data,
            created_by: user.id,
            enabled: user.is_active,
            country_id: selectedCountry.id,
        };

        const formDataWithUser  = createFormData(organizationData);
        mutation.mutate(formDataWithUser);
    };  

  return (
    <div className='organization-wrap'>
        <div className='btn-head'>
          <h2>Create Organization</h2>
        </div>
        <div className='card-form'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='profile'>
                <img src="/src/assets/images/1.png" id="uploadedAvatar" />
                <input type='file' {...register('image', { required: true })} />
                {errors.image && <p>Profile is required</p>}
              </div>
              <div className='field-wrap'>
                  <div className='form-group'> 
                      <label htmlFor="Name">Name</label>
                      <input 
                        className={`form-control ${errors.name ? 'input-error' : ''}`} 
                        type="text" 
                        {...register('name', { required: true })} 
                        placeholder='Name'
                      />
                       {errors.name && <p>Name is required</p>}      
                  </div>
                  <div className='form-group'> 
                      <label htmlFor="Phone">Phone</label>
                      <input 
                        className={`form-control ${errors.phone ? 'input-error' : ''}`} 
                        type="tel" 
                        {...register('phone', { required: true })}
                        placeholder='Phone'
                      /> 
                      {errors.phone && <p>Phone is required</p>}      
                  </div>
                  <div className='form-group'> 
                      <label htmlFor="Email">Email</label>
                      <input 
                        className={`form-control ${errors.email ? 'input-error' : ''}`} 
                        type="email" 
                        {...register('email', { required: true })}
                        placeholder='Email'
                       />
                       {errors.email && <p>Email is required</p>}       
                  </div>
                  <div className='form-group'> 
                      <label htmlFor="Website">Website</label>
                      <input 
                        className={`form-control ${errors.website ? 'input-error' : ''}`}
                        type="text" 
                        {...register('website', { required: true })}
                        placeholder='Website'
                      />
                      {errors.website && <p>Website is required</p>}       
                  </div>
              </div>
              <div className='field-wrap-all'>
                  <div className='form-group'> 
                      <label htmlFor="Address">Address</label>
                      <textarea 
                        className={`form-control ${errors.address ? 'input-error' : ''}`} 
                        type="text" 
                        {...register('address', { required: true })}
                        placeholder='Address'>
                     </textarea>
                     {errors.address && <p>Address is required</p>}       
                  </div>
              </div>
              <div className='field-wrap'>
                  <div className='form-group'> 
                      <label htmlFor="Country">Country</label>
                      <select
                            className={`form-control ${errors.country ? 'input-error' : ''}`}
                            {...register('country', { required: true })}
                        >
                            <option value="">Select country</option>
                            {
                                countries?.data.countries.map((country) => (
                                    <option key={country.id} value={country.id}>
                                        {country.name}
                                    </option>
                                ))
                            }
                        </select>
                      {errors.country && <p>Country is required</p>}       
                  </div>
                  <div className='form-group'> 
                      <label htmlFor="On-Boarding Date">On-Boarding Date</label>
                      <input 
                       className={`form-control ${errors.date ? 'input-error' : ''}`}
                       type="date" 
                       {...register('date', { required: true })} 
                      />
                      {errors.date && <p>Date is required</p>}       
                  </div>
                  <div className='form-group'> 
                      <label htmlFor="Color">Color</label>
                      <input 
                        className={`form-control ${errors.color ? 'input-error' : ''}`}
                        type="color" 
                        {...register('color', { required: true })} 
                      /> 
                      {errors.color && <p>Color is required</p>}      
                  </div>
              </div>
              <Button text="create" onClick={handleSubmit(onSubmit)} />
            </form>
        </div>
    </div>
  )
}

export default CreateOrganizations