import style from "./Form.module.css";
import { useState } from "react";
import validation from "../Validation/Validation";

const Form = ({ login }) => {
    const [errors, setErrors] = useState({});
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return(
    
        <form className={[style.Form, style.body_form]} onSubmit={handleSubmit}>
            <div className={style.brand_logo}></div>
            <div className={style.brand_title}>TWITTER</div>                    
            <div className={style.inputs}>
                <label className={style.label_form} htmlFor="email" style={{ color: "white"}}>Email: </label>
                <input type="email" name='email' value={userData.email} placeholder="example@test.com" onChange={handleChange}/>
                {errors.email && <p style={{ color: "red"}}>{errors.email}</p>}
                <hr />
                <label htmlFor="password" style={{ color: "white"}}>Password: </label>
                <input type="text" name="password" value={userData.password} placeholder="Min 4 charaters long" onChange={handleChange}/>
                {errors.password && <p style={{ color: "red"}}>{errors.password}</p>}

                <button className={style.button_form}>Submit</button>
            </div>
            <a href="https://twitter.com/allnightmare52">MADE BY LGSUS</a>
        </form>
    )
}

export default Form;