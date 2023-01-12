import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import '../style/Detail.css'

const DetailUser = () => {
    const [nik, setNik] =  useState("");
    const [name, setName] =  useState("");
    const [gender, setGender] =  useState("Male");
    const [dateofbirth, setDob] =  useState("");
    const [address, setAddress] =  useState("");
    const [country, setCountry] =  useState("");
    const [age, setAge] =  useState("");

    const {id} = useParams();

    useEffect(() => {
        getUserById();
    }, []);


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
        <div id='contentkaryawan'>
            <h1>Detail Karyawan</h1>
                <div id='list'>
                <h3>NIK:</h3>
                <p>{nik}</p>
                <h3>Nama Lengkap:</h3>
                <p>{name}</p>
                <h3>Jenis Kelamin:</h3>
                <p>{gender}</p>
                <h3>Tanggal Lahir:</h3>
                <p>{dateofbirth}</p>
                <h3>Alamat:</h3>
                <p>{address}</p>
                <h3>Negara:</h3>
                <p>{country}</p>
                <h3>Umur:</h3>
                <p>{age}</p>
                </div>   
        <button id='btnback'> <a href="/">Kembali</a></button>
        </div>
    )
    }

export default DetailUser