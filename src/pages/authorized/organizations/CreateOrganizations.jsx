import React from 'react'
import './Organizations.css'
import Button from '../../../components/Button'

const CreateOrganizations = () => {
  return (
    <div className='organization-wrap'>
        <div className='btn-head'>
          <h2>Create Organization</h2>
        </div>
        <div className='card-form'>
            <form>
              <div className='profile'>
                <img src="/src/assets/images/1.png" id="uploadedAvatar" />
              </div>
              <div className='field-wrap'>
                  <div className='form-group'> 
                      <label htmlFor="Name">Name</label>
                      <input className="form-control" type="text" value="" placeholder='Name'/>       
                  </div>
                  <div className='form-group'> 
                      <label htmlFor="Phone">Phone</label>
                      <input className="form-control" type="text" value="" placeholder='Phone'/>       
                  </div>
                  <div className='form-group'> 
                      <label htmlFor="Email">Email</label>
                      <input className="form-control" type="email" value="" placeholder='Email'/>       
                  </div>
                  <div className='form-group'> 
                      <label htmlFor="Website">Website</label>
                      <input className="form-control" type="text" value="" placeholder='Website'/>       
                  </div>
              </div>
              <div className='field-wrap-all'>
                  <div className='form-group'> 
                      <label htmlFor="Address">Address</label>
                      <textarea className="form-control" type="text" value="" placeholder='Address'></textarea>       
                  </div>
              </div>
              <div className='field-wrap'>
                  <div className='form-group'> 
                      <label htmlFor="Country">Country</label>
                      <select className="form-control">
                          <option>select sountry</option>
                          <option>pakistan</option>
                      </select>       
                  </div>
                  <div className='form-group'> 
                      <label htmlFor="On-Boarding Date">On-Boarding Date</label>
                      <input className="form-control" type="date" value="" />       
                  </div>
                  <div className='form-group'> 
                      <label htmlFor="Color">Color</label>
                      <input className="form-control" type="color" value="" />       
                  </div>
              </div>
              <Button text="create" />
            </form>
        </div>
    </div>
  )
}

export default CreateOrganizations