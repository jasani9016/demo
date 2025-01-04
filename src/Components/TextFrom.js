import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

const TextFrom = (props) => {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: '',
        email: '',
        text: '',
    });

    // const [text, setText] = useState();

    // uppercase
    const handleOnClick = () => {
        setForm({
            ...form,
            name: form?.name?.toUpperCase(),
            email: form?.email?.toUpperCase(),
            text: form?.text?.toUpperCase(),
        })
    }

    // lowercase
    const handleLoClick = () => {
        setForm({
            ...form,
            name: form?.name?.toLowerCase(),
            email: form?.email?.toLowerCase(),
            text: form?.text?.toLowerCase(),
        })
    }

    const handleClearClick = () => {
        setForm({
            name: '',
            email: '',
            text: '',
        })
    }

    const handleCopy = () => {
        // navigate.clipboard.writeText(form.name);
        if (form.name) {
            navigator.clipboard.writeText(form.name)
        }
    }

    useEffect(() => {
        console.log(form, "form");
    }, [form])

    const handleOnChange = (event) => {
        console.log(event.target.name, event.target.value)
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    // -----------------------------------------------------

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <header className="header">
                    <h1 id="title" className="text-center">Survey Form</h1>
                    <p id="description" className="text-center">
                        Thank you for taking the time to help us improve the platform
                    </p>
                </header>
                <div className="form-wrap">
                    <form id="survey-form">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label id="name-label" htmlFor="name">Name</label>
                                    <input type="text" name="name" value={form.name} id="name" onChange={(event) => handleOnChange(event)} placeholder='Enter your name' className="form-control" required />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label id="email-label" htmlFor="email">Email</label>
                                    <input type="email" name="email" value={form.email} id="email" onChange={(event) => handleOnChange(event)} placeholder="Enter your email" className="form-control" required />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label id="number-label" htmlFor="number">Age <small>(optional)</small></label>
                                    <input type="number" name="age" id="number" min="10" max="99" className="form-control" placeholder="Age" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>current role</label>
                                    <select id="dropdown" name="role" className="form-control" required>
                                        <option disabled selected value>Select</option>
                                        <option value="student">Student</option>
                                        <option value="job">Full Time Job</option>
                                        <option value="learner">Full Time Learner</option>
                                        <option value="preferNo">Prefer not to say</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Would you recommend survey to a friend?</label>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="customRadioInline2" value="Maybe" name="customRadioInline1" className="custom-control-input" />
                                        <label className="custom-control-label ms-2" htmlFor="customRadioInline2">Maybe</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="customRadioInline3" value="Not sure" name="customRadioInline1" className="custom-control-input" />
                                        <label className="custom-control-label ms-2" htmlFor="customRadioInline3">Not sure</label>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>This survey useful yes or no?</label>
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" className="custom-control-input" name="no" value="no" id="no" />
                                        <label className="custom-control-label ms-2" htmlFor="no">No</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Leave Message</label>
                                    <textarea id="comments" className="form-control text-light" name="text" value={form.text} onChange={(event) => handleOnChange(event)} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black' }}></textarea>
                                </div>
                            </div>
                        </div>

                        <div className="row row-cols-4 gap-1">
                            <button type="submit" id="submit" className="btn btn-primary btn-block" onClick={() => navigate("details", { state: form })}>Submit Survey</button>
                            <button onClick={handleOnClick} className='btn btn-primary'>Convert to Uppercase</button>
                            <button onClick={handleLoClick} className='btn btn-primary'>Convert to Lowercase</button>
                            <button onClick={handleClearClick} className='btn btn-primary'>Clear</button>
                            <button onClick={handleCopy} className='btn btn-primary'>Copy text</button>
                        </div>
                    </form>
                </div >
            </div>

            {/* split start */}
            <div className='container'>
                <h2>Your text summary</h2>
                <p>{form.text.split(" ").length} Words and {form.text.length} characters</p>
                <p>{0.008 * form.text.split(" ").length} Minutes read</p>
            </div>
        </>
    )
}

export default TextFrom