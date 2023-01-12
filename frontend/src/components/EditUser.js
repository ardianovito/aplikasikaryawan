import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import '../style/Edituser.css'

const EditUser = () => {

    const [nik, setNik] =  useState("");
    const [name, setName] =  useState("");
    const [gender, setGender] =  useState("Male");
    const [dateofbirth, setDob] =  useState("");
    const [address, setAddress] =  useState("");
    const [country, setCountry] =  useState("Argentina");
    const [age, setAge] =  useState("");


    const navigate = useNavigate();
    const {id} = useParams();


    useEffect(() => {
        getUserById();
    }, []);



    const updateUser = async (e) =>{
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/users/${id}`,{
                nik,
                name,
                gender,
                dateofbirth, 
                address,
                age,
                country
            });
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }



    const getUserById = async() =>{
        const response = await axios.get(`http://localhost:5000/users/${id}`);
        setNik(response?.data?.nik);
        setName(response?.data?.name);
        setGender(response?.data?.gender);
        setDob(response?.data?.dateofbirth);
        setAddress(response?.data?.address);
        setCountry(response?.data?.country);
        setAge(response?.data?.age);
    }



    return (
    <div className="columns">
        <div className="columnn">
            <form onSubmit={updateUser}>
                <div className="field">
                    <label className='label'>
                        <p>NIK</p>
                        <div className="control">
                            <input 
                            type="text" 
                            className="input" 
                            value={nik}
                            onChange= {(e) => setNik(e.target.value)}
                            />
                        </div>
                    </label>
                </div>


                <div className="field">
                    <label className='label'>
                        <p>Nama Lengkap</p>
                        <div className="control">
                            <input type="text" 
                            className="input" 
                            value={name}
                            onChange= {(e) => setName(e.target.value)}
                            />
                        </div>
                    </label>
                </div>

                <div className="field">
                    <p>Jenis Kelamin</p>
                    <label id="selectgenderm" className='label'>
                        <p>Male</p>
                        <div className="control">
                            <div id="selectgenderm">
                            <input type="radio" 
                            value={gender}
                            onChange= {(e) => setGender(e.target.value)}
                            />
                            </div>
                        </div>
                    </label>

                    <label idd="selectgenderf" className='label'>
                        <p>Female</p>
                        <div className="control">
                            <div id="selectgenderf">
                            <input type="radio" 
                            value={gender}
                            onChange= {(e) => setGender(e.target.value)}
                            />
                            </div>
                        </div>
                    </label>
                </div>

                <div className="field">
                    <label className='label'>
                        <p>Tanggal Lahir</p>
                        <div className="control">
                            <input type="date" 
                            className="input" 
                            value={dateofbirth}
                            onChange= {(e) => setDob(e.target.value)}
                            />
                        </div>
                    </label>
                </div>

                
                <div className="field">
                    <label className='label'>
                        <p>Umur</p>
                        <div className="control">
                            <input type="text" 
                            className="input" 
                            value={age}
                            onChange= {(e) => setAge(e.target.value)}
                            />
                        </div>
                    </label>
                </div>

                <div className="field">
                    <label className='label'>
                        <p>Alamat</p>
                        <div className="control">
                            <input type="text" 
                            className="input"
                            value={address}
                            onChange= {(e) => setAddress(e.target.value)}
                            />
                        </div>
                    </label>
                </div>


                <div className="field">
                    <label className='label'>
                        <p>Negara</p>
                        <div className="control">
                            <div className="select">
                                <select
                                id='selectcountry'
                                value={country}
                                onChange= {(e) => setCountry(e.target.value)}
                                >
                                    <option value="Argentina">Argentina</option>
                                    <option value="Indonesia">Indonesia</option>
                                    <option value="Malaysia">Malaysia</option>
                                    <option value="Portugal">Portugal</option>
                                    <option value="Rusia">Rusia</option>
                                </select>
                            </div>
                        </div>
                    </label>
                </div>

                <div className='btnedit'>

                    <button id='btnsubmit' type='submit' >Update</button>
                    <button id='btnback' type='submit' ><a href="/">Kembali</a></button>
                </div>
            
                
                    

            </form>
        </div>

    </div>
    )
}

export default EditUser;