import './New.scss'
import Sidebar from '../../Component/Sidebar/Sidebar'
import Navbar from '../../Component/Navbar/Navbar'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

const New = () => {
  return (
    <div className='new'>
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1>Add New User</h1>
        </div>
        <div className="bottom">
          <div className="left">
              <Stack direction="row" style={{padding:'20px'}}>
                <Avatar alt="EMPTY" className='itemImage' src="https://pixabay.com/vectors/blank-profile-picture-mystery-man-973460/"/>
              </Stack>
          </div>
          <div className="right">
            <form action="">
              <div className="formInput">
                <label htmlFor='file'>Image: <DriveFolderUploadIcon className='icon'/></label>
                <input type="file" id='file' style={{display:"none"}}/>
              </div>
              <div className="formInput">
                <label>Username</label>
                <input type="text" placeholder='john_doe' />
              </div>
              <div className="formInput">
                <label>Name</label>
                <input type="text" placeholder='John Doe' />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="email" placeholder='johndoe@email.com' />
              </div>
              <div className="formInput">
                <label>Phone</label>
                <input type="number" placeholder='+256 234567890' />
              </div>
              <div className="formInput">
                <label>Password</label>
                <input type="password" />
              </div>
              <div className="formInput">
                <label>Address</label>
                <input type="text" placeholder='Naalya Quality Supermarket Road' />
              </div>
              <div className="formInput">
                <label>Country</label>
                <input type="text" placeholder='Uganda' />
              </div>
              <button>SEND</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New