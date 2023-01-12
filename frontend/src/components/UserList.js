import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../style/Userlist.css'
import logo from '../assets/img/iconkartunama.jpg'
import { useNavigate } from 'react-router-dom';




const UserList = () => {

    const [users, setUser] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();
    useEffect(() => {
    getUsers();
    }, []);

    const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUser(response.data);
    };

    const deleteUser = async (id) => {
    try {
        await axios.delete(`http://localhost:5000/users/${id}`);
        getUsers();
    } catch (error) {
        console.log(error);
    }
    handleClose(false)
    };
    
    const handleDelete = () =>{
        handleClose(false)
        navigate("/")
    }

    return (
    <div className='userlist'>
        <div id='header'>
        <img id='logo'src={logo} alt="logo"/>
        <h1 id='title'>Aplikasi Data Pribadi</h1>
        </div>
        
        <div id='searchwrap'>
            <div id='nikfield'>
                        <label className='label'>
                            <div>
                                <p id='title' >NIK</p>
                                <input 
                                className='length'
                                type="text" 
                                />
                            </div>
                        </label>
            </div>

            <div id="namefield">
                    <label className='label'>
                        <div>
                            <p id='title'>Nama</p>
                            <input 
                            className='length'
                            type="text" 
                            />
                        </div>
                    </label>
            </div>


        </div>

        

        <div id='wrapadd'>
            <Link id='add' to ={`add`}>Add</Link>
            <Link id='search'>Search</Link>
        </div>

        
        
        <table className="table">
        <thead id='theadst'>
        <tr >
        <th scope="col">NO</th>
        <th scope="col">NIK</th>
        <th scope="col">Nama Lengkap</th>
        <th scope="col">Umur</th>
        <th scope="col">Tanggal Lahir</th>
        <th scope="col">Jenis Kelamin</th>
        <th scope="col">Alamat</th>
        <th scope="col">Negara</th>
        <th scope="col">Action</th>

        </tr>
    </thead>
    <tbody>
        {users.map((user, index)=> (
            <tr key ={user.id}>
            <td>{index + 1}</td>
            <td>{user.nik}</td>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.dateofbirth}</td>
            <td>{user.gender}</td>
            <td>{user.address}</td>
            <td>{user.country}</td>


            <>
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Perhatian!</Modal.Title>
            </Modal.Header>
            <Modal.Body>Anda yakin ingin menghapus data? {user.name} </Modal.Body>
            <Modal.Footer>
            <Button id='btndelete' variant="primary" onClick={() => deleteUser(user.id)}>
            OK
            </Button>
            <Button id='btncancel' variant="secondary" onClick={handleDelete}>
            Batal
            </Button>
            </Modal.Footer>
            </Modal>
            
            </>

            <td>
                <Link to={`/detail/${user.id}`} id='btndetail'>Detail</Link>
                <Link id='btnedit' to ={`/edit/${user.id}`}>Edit</Link>
                <button id='btnconfirmdelete' onClick={handleShow}>Delete</button>
            </td>
            </tr>

        ))}

    </tbody>
        </table>
    </div>
        )
}

export default UserList