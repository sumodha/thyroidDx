"use client"
import {useState, useRef} from 'react';
import './Popup.css'

const Popup = ({setOpenPopup}) => {
    const [values, setValues] = useState({
        age: "", 
        sex: "",
        on_thyroxine: "",
        on_antithyroid_meds: "",
        sick: "",
        pregnant: "",
        thyroid_surgery: "",
        I131_treatment: "",
        goitre: "", 
        tumor: "",
        TSH: "",
        T3: "",
        TT4: "",
        T4U: "",
        FTI: ""


    });
    const [submitted, setSubmitted] = useState(false);


    const handleChange = (e) => {
        setValues({...values, [e.target.name]:e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
        setSubmitted(true);
    }

    const handleCancel = () => {
        handleReset();
        setOpenPopup(false);

    }
    const handleReset = () => {
        setValues({
        age: "", 
        sex: "",
        on_thyroxine: "",
        on_antithyroid_meds: "",
        sick: "",
        pregnant: "",
        thyroid_surgery: "",
        I131_treatment: "",
        query_hypothyroid: "",
        query_hyperthyroid: "",
        goitre: "", 
        tumor: "",
        TSH: "",
        T3: "",
        TT4: "",
        T4U: "",
        FTI: ""
    })
    }

   



    
    return (
        <div id = "Popup-overlay">
        <div id="Popup-container">
        {
            submitted  ? 
            ( <>
            <h2 class="diagnosis">Your Diagnosis: </h2>
            <h2 class="diagnosis">Hyperthyroidism</h2>
            <button type = "button" onClick = {handleCancel}>Close</button>
            </>) 
            : (
            <>
            <h2 id="Popup-title">Personal Information & Bloodwork</h2>
        
            <form onSubmit={handleSubmit}>
            <div id = "Popup-content">
            <label htmlFor="age" > Age: </label>
            <input type="number" name="age" onChange = {(e) => handleChange(e)} required/>

            <label htmlFor="sex" required> Sex:</label>
            <input type="radio" name = "sex" value ="Male" onChange = {(e) => handleChange(e)} required/>Male
            <input type="radio" name = "sex" value ="Female" onChange = {(e) => handleChange(e)} required/>Female

            <label htmlFor="on_thyroxine"> Are you on thyroxine (T4)?</label>
            <input type="radio" name = "on_thyroxine" value ="Yes" onChange = {(e) => handleChange(e)} required/>Yes
            <input type="radio" name = "on_thyroxine" value ="No" onChange = {(e) => handleChange(e)} required/>No

            <label htmlFor="on_antithyroid_meds"> Are you on antithyroid medication?</label>
            <input type="radio" name = "on_antithyroid_meds" value ="Yes" onChange = {(e) => handleChange(e)} required/>Yes
            <input type="radio" name = "on_antithyroid_meds" value ="No" onChange = {(e) => handleChange(e)} required/>No
        
            <label htmlFor="sick"> Are you sick?</label>
            <input type="radio" name = "sick" value ="Yes" onChange = {(e) => handleChange(e)} required/>Yes
            <input type="radio" name = "sick" value ="No" onChange = {(e) => handleChange(e)} required/>No

            <label htmlFor="pregnant"> Are you pregnant?</label>
            <input type="radio" name = "pregnant" value ="Yes" onChange = {(e) => handleChange(e)} required/>Yes
            <input type="radio" name = "pregnant" value ="No" onChange = {(e) => handleChange(e)} required/>No

            <label htmlFor="thyroid_surgery"> Have you ever had thyroid surgery?</label>
            <input type="radio" name = "thyroid_surgery" value ="Yes" onChange = {(e) => handleChange(e)} required/>Yes
            <input type="radio" name = "thyroid_surgery" value ="No" onChange = {(e) => handleChange(e)} required/>No

            <label htmlFor="I131_treatment"> Have you ever had Iodine (I131 treatment)?</label>
            <input type="radio" name = "I131_treatment" value ="Yes" onChange = {(e) => handleChange(e)} required/>Yes
            <input type="radio" name = "I131_treatment" value ="No" onChange = {(e) => handleChange(e)} required/>No

            <label htmlFor="query_hypothyroid"> Do you believe you have hypothyroidism?</label>
            <input type="radio" name = "query_hypothyroid" value ="Yes" onChange = {(e) => handleChange(e)} required/>Yes
            <input type="radio" name = "query_hypothyroid" value ="No" onChange = {(e) => handleChange(e)} required/>No

            <label htmlFor="query_hyperthyroid"> Do you believe you have hyperthyroidism?</label>
            <input type="radio" name = "query_hyperthyroid" value ="Yes" onChange = {(e) => handleChange(e)} required/>Yes
            <input type="radio" name = "query_hyperthyroid" value ="No" onChange = {(e) => handleChange(e)} required/>No

            <label htmlFor="goitre"> Do you have a goitre?</label>
            <input type="radio" name = "goitre" value ="Yes" onChange = {(e) => handleChange(e)} required/>Yes
            <input type="radio" name = "goitre" value ="No" onChange = {(e) => handleChange(e)} required/>No

            <label htmlFor="tumor"> Do you have a tumor?</label>
            <input type="radio" name = "tumor" value ="Yes" onChange = {(e) => handleChange(e)} required />Yes
            <input type="radio" name = "tumor" value ="No" onChange = {(e) => handleChange(e)} required/>No

            <label htmlFor="TSH"> What are your TSH levels?</label>
            <input type = "number" step = "any" name = "TSH" onChange = {(e) => handleChange(e)} required/>

            <label htmlFor="T3"> What are your T3 levels?</label>
            <input type = "number" step = "any" name = "T3" onChange = {(e) => handleChange(e)} required/>

            <label htmlFor="TT4"> What are your TT4 levels?</label>
            <input type = "number" step = "any" name = "TT4" onChange = {(e) => handleChange(e)} required/>

            <label htmlFor="T4U"> What are your T4U levels?</label>
            <input type = "number" step = "any" name = "T4U" onChange = {(e) => handleChange(e)} required/>

            <label htmlFor="FTI"> What are your FTI levels?</label>
            <input type = "number" step = "any" name = "FTI" onChange = {(e) => handleChange(e)} required/>
            </div>

            <div id = "buttons"> 
            <button type = "button" onClick = {handleCancel}>Cancel</button>
            <button type = "submit">Submit</button>
            </div>
            
            </form>
            </>) 
        }
        
            
            
        </div>
        </div>

    );
}

export default Popup;