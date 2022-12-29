import React, { useContext, useRef, useState } from 'react';

import { AuthContext } from '../../contexts/AuthProvider';


const Profile = () => {

   

    const {user} = useContext(AuthContext);
    const [name, setName] = useState(user.displayName);
    const photoURLRef = useRef(user.photoURL);

    const handleSubmit = event => {
        event.preventDefault();
        // console.log(photoURLRef.current.value);
    }

    const handleNameChange = event =>{
        setName(event.target.value)
    }
console.log(name);

    return (
<div>
<h2 className='text-xl w-80 mx-4 my-1'>User Information</h2>

        
        <form onSubmit={handleSubmit}>
            

            {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control ref={photoURLRef} defaultValue={user?.photoURL} type="text" placeholder="Photo URL" />
            </Form.Group> */}

            <div className="form-control w-full max-w-xs">
                        <label className="label w-80 mx-4 my-1"> <span className="label-text">Email</span></label>
                        <input   className="input input-bordered w-80 mx-4 my-4" readOnly defaultValue={user?.email} type="email" placeholder="Enter email"/>
                       
                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label w-80 mx-4 my-1"> <span className="label-text">Name</span></label>
                        <input className="input input-bordered w-80 mx-4 my-4" onChange={handleNameChange}  readOnly defaultValue={name} type="text" placeholder="Name"/>
                       
                    </div>

{/* 
                    <div className="form-control w-full max-w-xs">
                        <label className="label w-80 mx-4 my-1"> <span className="label-text">Photo url</span></label>
                        <input  className="input input-bordered w-80 mx-4 my-4" ref={photoURLRef} defaultValue={user?.photoURL} type="text" placeholder="Photo URL"/>
                       
                    </div> */}


           

            <input className='btn btn-accent w-80 mx-4 my-4' value="Submit" type="submit" />
        </form>


      
        </div>


    );
};

export default Profile;