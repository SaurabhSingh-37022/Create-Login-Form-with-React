import './BasicForm.css'
import React, {useState} from 'react'

function BasicForm(){
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const [allEntry,setAllEntry]= useState([])

    function submitForm(e){
        e.preventDefault();
        const newEntry = {email : email, password : password};
        setAllEntry([...allEntry, newEntry])
        console.log(allEntry)


    };


    return(
        <div className="form">
            <form action="" onSubmit={submitForm} >
                <div>
                    <label htmlfor="email">Email</label>
                    <input type="text" name="emaii" id="email" autocomplete="off" value={email}
                    onChange={(e) => setEmail(e.target.value)}></input>
                </div>

                <div>
                    <label htmlfor="password">Password</label>
                    <input type="text" name="password" id="password" autocomplete="off" value={password}
                      onChange={(e) => setPassword(e.target.value)}></input>
                </div>

                <button type="submit">Login</button>
            </form>

            <div>
                {
                    allEntry.map((currElem) => {
                        return(
                            <div>
                                <div className="show">
                                    <p>{currElem.email}</p>
                                    <p>{currElem.password}</p>
                                </div>

                            </div>
                           
                        )
                        
                    })
                }
            </div>

        </div>
    )
}
export default BasicForm;