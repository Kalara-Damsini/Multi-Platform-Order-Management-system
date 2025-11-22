import React from 'react'
import './addOrder.css'

const AddOrder = () => {
  return (
    <div className='addPage'>
        <div>
            <h1>Add New Order</h1>
            <p>Fill in the details below to create to new order entry</p>  
        </div>
      
        <form action="" id='form'>

            <div className='add-row1'>
                <div className="form-group">
                    <label htmlFor="customerName">Customer Name:</label>
                    <input type="text" id="customerName" name="customerName" placeholder="Enter customer's full name" required />
                </div>

                <div className="form-group">
                    <label htmlFor="product">Product Name:</label>
                    <input type="text" id="product" name="product" placeholder='Enter product or Service name' required />
                </div>
            </div>
            
            <div className='add-row2'>
                <div className="form-group">
                    <label htmlFor="orderDate">Order Date:</label>
                    <input type="date" id="orderDate" name="orderDate" required />
                </div>

                <div className="form-group">
                    <label htmlFor="deadlineDate">Deadline Date:</label>
                    <input type="date" id="deadlineDate" name="deadlineDate" required />
                </div>
            </div>

            <div>
                <div className="add-row3">
                    <label htmlFor="platform">Select Platform:</label>
                    <select id="platform" name="platform" required>
                        <option value=""> Select Platform </option>
                        <option value="manual">Manual</option>
                        <option value="whatsapp">Whatsapp</option>
                        <option value="instagram">Instagram</option>
                        <option value="tiktok">Tiktok</option>
                        <option value="facebook">Facebook</option>
                    </select>
                </div>
            </div>
            <div className='line'></div>

            <div className='add-row4'>
                <div className="form-group">
                    <label htmlFor="orderAmount">Order Amount:</label>
                    <input type="text" id="orderAmount" name="orderAmount" required />
                </div>

                <div className="form-group">
                    <label htmlFor="advanceReceived">Advance Received:</label>
                    <input type="text" id="advanceReceived" name="advanceReceived" required />
                </div>

                <div className="form-group">
                    <label htmlFor="balanceDue">Balance Due:</label>
                    <input type="text" id="balanceDue" name="balanceDue" required />
                </div>
                
            </div>
            <div className='line'></div>

            <div className='add-row5'>
                <div className='form-group'>
                    <label htmlFor="proofs">Delivery Labels & Proofs:</label>
                    <input type="file" id="proofs" name="proofs" multiple />
                </div>
            </div>
            
            <div className='line'></div>

            <div className='add-row6'>
                <div className='form-group'>
                    <label htmlFor="additionalNotes">Additional Notes:</label>
                    <textarea id="additionalNotes" name="additionalNotes" rows="4" placeholder='Enter any additional notes here...'></textarea>
                </div>
            </div>
            
            
            <div className='add-row7'>
                <button type="submit" id='cancelBtn'>Cancel</button>
                <button type="submit" id='submitBtn'>Save</button>
            </div>

        </form>
    </div>
  )
}

export default AddOrder
