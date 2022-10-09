import React,{useState} from "react";
import { useForm } from "react-hook-form";
import Problem from "./Problem";

const Home = () =>{
    
    const {formData,setFormData}=useState([]);
    const {page,setPage}=useState([<Problem key={0}/>]);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    return (
        <>
            <div className="home">
                <div className="header">
                    <h1 className="heading">Pain & Functional Description</h1>
                    <div className="content">
                        <p>The description of the current situation gives your optimum<br></br> Trainer a picture of and clues to the underlying causes of your problems</p>
                    </div>
                </div>
                <Problem register={register} handleSubmit={handleSubmit} setFormData={setFormData} setpage={setPage}></Problem>
            </div>
        </>
    )
}
export default Home;