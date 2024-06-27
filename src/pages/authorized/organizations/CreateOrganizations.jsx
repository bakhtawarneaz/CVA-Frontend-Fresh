import React, { useRef, useState } from 'react'
import './Organizations.css'
import Button from '../../../components/Button'
import { useForm } from 'react-hook-form';
import { useMutation, useQuery } from '@tanstack/react-query';
import { createOrganization, fetchCountries } from '../../../api/organizationsApi';
import { useTypedSelector } from '../../../hooks/hooksType';


const CreateOrganizations = () => {

    const [imagePreview, setImagePreview] = useState(null);
    const fileInputRef = useRef(null);

    const { register, handleSubmit, formState: { errors }, setValue, trigger  } = useForm();

    const user = useTypedSelector((state) => state.auth.user);
    const token = useTypedSelector((state) => state.auth.token);
 
    const { data: countries, error: countriesError  } = useQuery({
        queryKey: ['countries'],
        queryFn: fetchCountries
    });

    const mutation = useMutation({
        mutationFn: (formData) => createOrganization(formData, token),
        onSuccess: (data) => {
          console.log('Form submitted successfully', data);
        },
        onError: (error) => {
          console.error('Error submitting form', error);
        },
      });
    
    const onSubmit = (data) => {

        const selectedCountry = countries.data.countries.find(country => country.id === data.country);
        const isActiveBoolean = user.is_active === 'true' || user.is_active === true;
        
        const organizationData = {
            ...data,
            created_by: parseInt(user.id),
            enabled: isActiveBoolean,
            country_id: parseInt(selectedCountry.id),
        };
        
        mutation.mutate(organizationData);
    };  

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setImagePreview(reader.result);
            setValue('logo', file.name);
            trigger('logo'); 
          };
          reader.readAsDataURL(file);
        }
      };

      const handleImageClick = () => {
        fileInputRef.current.click();
      };
 

  return (
    <div className='organization-wrap'>
        <div className='btn-head'>
          <h2>Create Organization</h2>
        </div>
        <div className='card-form'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='profile'>
                <img 
                    onClick={handleImageClick} 
                    src={imagePreview ? imagePreview : '/src/assets/images/1.png'} 
                    id="uploadedAvatar" 
                />
                <input 
                    type='file' 
                    {...register('logo', { required: true })} 
                    onChange={handleImageChange}
                    ref={fileInputRef}
                    hidden
                />
                {errors.logo && <p>Profile is required</p>}
              </div>
              <div className='field-wrap'>
                  <div className='form-group'> 
                      <label htmlFor="Name">Name</label>
                      <input 
                        className={`form-control ${errors.first_name ? 'input-error' : ''}`} 
                        type="text" 
                        {...register('first_name', { required: true })} 
                        placeholder='Name'
                      />
                       {errors.first_name && <p>Name is required</p>}      
                  </div>
                  <div className='form-group'> 
                      <label htmlFor="Phone">Phone</label>
                      <input 
                        className={`form-control ${errors.number ? 'input-error' : ''}`} 
                        type="tel" 
                        {...register('number', { required: true })}
                        placeholder='Phone'
                      /> 
                      {errors.number && <p>Phone is required</p>}      
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
                      <label htmlFor="City">City</label>
                      <input 
                        className={`form-control ${errors.city ? 'input-error' : ''}`}
                        type="text" 
                        {...register('city', { required: true })}
                        placeholder='City'
                      />
                      {/* <select
                            className={`form-control ${errors.city ? 'input-error' : ''}`}
                            {...register('city', { required: true })}
                        >
                            <option value="">Select country</option>
                            {
                                countries?.data.countries.map((country) => (
                                    <option key={country.id} value={country.id}>
                                        {country.name}
                                    </option>
                                ))
                            }
                        </select> */}
                      {errors.city && <p>City is required</p>}       
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
                        className={`form-control ${errors.primary_color ? 'input-error' : ''}`}
                        type="color" 
                        {...register('primary_color', { required: true })} 
                      /> 
                      {errors.primary_color && <p>Color is required</p>}      
                  </div>
              </div>
              <Button text="create" onClick={handleSubmit(onSubmit)} />
            </form>
        </div>
    </div>
  )
}

export default CreateOrganizations