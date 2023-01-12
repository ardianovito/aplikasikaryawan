import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import '../style/Adduser.css'


const AddUser = () => {

    const [nik, setNik] =  useState("");
    const [name, setName] =  useState("");
    const [gender, setGender] =  useState("Laki-Laki");
    const [dateofbirth, setDob] =  useState("");
    const [address, setAddress] =  useState("");
    const [country, setCountry] =  useState("Argentina");
    const [age, setAge] =  useState("");


    const navigate = useNavigate();

    const addUser = async (e) =>{
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/users/',{
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


    return (
        <div className="columns">
        <div className="columnn">
            <form onSubmit={addUser}>
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
                        <p>Laki-Laki</p>
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
                        <p>Perempuan</p>
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
                    <button id='btnsubmit' type='submit' >Simpan</button>
                    <button id='btnbackhome' type='submit' ><a href="/">Kembali</a></button>
                    

            </form>
           
            
        </div>
    </div>
    )
}

export default AddUser