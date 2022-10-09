import {React, useState} from "react";
import { useForm } from "react-hook-form";
import Form from "./Form";
const Problem = ({register,handleSubmit,setFormData,setpage}) =>{    
    
    const onSubmit = (data) => {
        console.log("----->",data);
    }
    return (
        <>
            <div className="container">
                <div className="header">
                    <p>If you have problems with pain/aches, stiffness, weakness or functional problems,describe this/these below.(list the symptoms in descending order with the most troublesome first) </p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <textarea {...register("text1")} className="box" >
                        
                    </textarea>
                    <div className="problem">
                        <p>1) Have you been dignosed with this problem?</p>
                        <input {...register("first",{required:true})} type="radio" value="Not relevent" name="first"/>
                        <label>Not relevent</label>
                        <input {...register("first",{required:true})} type="radio" value="yes" name="first"/>
                        <label>Yes</label>
                        <input {...register("first",{required:true})}  type="radio" value="no" name="first"/>
                        <label>No</label>
                    </div>
                    <div className="problem">
                        <p>2) Did the problem start after a physical trauma?</p>
                        <input {...register("second",{required:true})} type="radio" value="Not relevent" name="second"/>
                        <label>Not relevent</label>
                        <input {...register("second",{required:true})} type="radio" value="yes" name="second"/>
                        <label>Yes</label>
                        <input {...register("second",{required:true})} type="radio" value="no" name="second"/>
                        <label>No</label>
                    </div>
                    <div className="problem">
                        <p>3) Did the problem start after a physical trauma?</p>
                        <input {...register("third",{required:true})} type="radio" value="Not relevent" name="third"/>
                        <label>Not relevent</label>
                        <input {...register("third",{required:true})} type="radio" value="yes" name="third"/>
                        <label>Yes</label>
                        <input {...register("third",{required:true})} type="radio" value="no" name="third"/>
                        <label>No</label>
                    </div>
                    <div className="problem">
                        <p>4) How often do you experience the problem?</p>
                        <input {...register("fourth",{required:true})} type="radio" value="Not relevent" name="fourth"/>
                        <label>Not relevent</label>
                        <input {...register("fourth",{required:true})} type="radio" value="daily" name="fourth"/>
                        <label>Daily</label>
                        <input {...register("fourth",{required:true})} type="radio" value="severalTimesWeek" name="fourth"/>
                        <label>Several times/Week</label>
                        <input {...register("fourth",{required:true})} type="radio" value="aFewTimesMonth" name="fourth"/>
                        <label>A few times/month</label>
                        <input {...register("fourth",{required:true})} type="radio" value="severalTimesYear" name="fourth"/>
                        <label>A few times/year</label>
                    </div>
                    <div className="problem">
                        <p>5) When do you experience the problem?</p>
                    </div>
                    <div className="fifth">
                        <input {...register("fifth",{required:true})}  type="checkbox" id="1" name="fifth" value="Not relevent"/>
                        <label for="vehicle1"> Not relevent</label><br></br>
                        <input {...register("fifth",{required:true})}  type="checkbox" id="2" name="fifth" value="When laying down"/>
                        <label for="vehicle2"> When laying down</label><br></br>
                        <input {...register("fifth",{required:true})}  type="checkbox" id="3" name="fifth" value="When sitting"/>
                        <label for="vehicle3"> When sitting</label><br></br>
                        <input {...register("fifth",{required:true})}  type="checkbox" id="3" name="fifth" value="Under standing"/>
                        <label for="vehicle3"> Under standing</label><br></br>
                        <input {...register("fifth",{required:true})}  type="checkbox" id="3" name="fifth" value="In walking"/>
                        <label for="vehicle3"> In walking</label><br></br>
                    </div>
                        <textarea {...register("text2",{required:true})}  className="box">
                        
                        </textarea>
                    <div className="problem">
                        <p>4) How intense is the experience of the problem on average on a 0-10 scale ?</p>
                        <input {...register("sixth",{required:true})} type="radio" value="1" name="sixth"/>
                        <label>1</label>
                        <input {...register("sixth",{required:true})} type="radio" value="2" name="sixth"/>
                        <label>2</label>
                        <input {...register("sixth",{required:true})} type="radio" value="2" name="sixth"/>
                        <label>3</label>
                        <input {...register("sixth",{required:true})} type="radio" value="3" name="sixth"/>
                        <label>4</label>
                        <input {...register("sixth",{required:true})} type="radio" value="4" name="sixth"/>
                        <label>5</label>
                        <input {...register("sixth",{required:true})} type="radio" value="5" name="sixth"/>
                        <label>6</label>
                        <input {...register("sixth",{required:true})} type="radio" value="6" name="sixth"/>
                        <label>7</label>
                        <input {...register("sixth",{required:true})} type="radio" value="7" name="sixth"/>
                        <label>8</label>
                        <input {...register("sixth",{required:true})} type="radio" value="8" name="sixth"/>
                        <label>9</label>
                        <input {...register("sixth",{required:true})} type="radio" value="10" name="sixth"/>
                        <label>10</label>
                    </div>
                    
                    <input type="submit"/><br></br><br></br>
                    <button type="button">Back</button>
                    <button type="button">Next</button>
                </form>
            </div>
        </>
    )
}
export default Problem;