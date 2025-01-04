import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const InputFrom = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        text: '',
    });

    return (
        <form id="survey-form">
            <div className='container'>
                <div className="form-group">
                    <label>current role</label>
                    <select id="dropdown" name="role" className="form-control" >
                        <option disabled selected value>New Zealand</option>
                        <option value="student">England</option>
                        <option value="job">India</option>
                        <option value="learner">japan</option>
                    </select>
                </div>
                <button type="button" class="btn btn-primary mt-5">Submit</button>
            </div>
        </form>
    )
}

export default InputFrom