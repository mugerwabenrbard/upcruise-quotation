import './Single.scss'
import Sidebar from '../../Component/Sidebar/Sidebar'
import Navbar from '../../Component/Navbar/Navbar'
import Chart from '../../Component/chart/Chart'
import Tables from '../../Component/Table/Table'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const Single = () => {
  return (
    <div className='single'>
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <div className="title">User Information</div>
            <div className="item">
              <Stack direction="row" style={{padding:'20px'}}>
                <Avatar alt="Item Image" className='itemImage' src="https://pixabay.com/vectors/blank-profile-picture-mystery-man-973460/"/>
              </Stack>
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className='itemKey'>Email:</span>
                  <span className='itemValue'>janedoe@email.com</span>
                </div>
                <div className="detailItem">
                  <span className='itemKey'>Phone:</span>
                  <span className='itemValue'>+256 234567890</span>
                </div>
                <div className="detailItem">
                  <span className='itemKey'>Address:</span>
                  <span className='itemValue'>Naalya Quality Supermarket Road</span>
                </div>
                <div className="detailItem">
                  <span className='itemKey'>Country:</span>
                  <span className='itemValue'>Uganda</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3/1} title="User Spending (Last 6 Months)"/>
          </div>
        </div>
        <div className="bottom">
          <div className="title">Last 5 Transactions</div>
          <Tables/>
        </div>
      </div>
    </div>
  )
}

export default Single