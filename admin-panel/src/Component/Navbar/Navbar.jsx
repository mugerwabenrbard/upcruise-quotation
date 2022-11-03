import './Navbar.scss'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import Badge from '@mui/material/Badge';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search' />
          <SearchIcon/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className='icon'/>
            English
          </div>
          <div className="item">
          <Stack spacing={4} direction="row">
            <Badge color="success" badgeContent={1000} max={9}>
              <NotificationsNoneIcon/>
            </Badge>
          </Stack>
          </div>
          <div className="item">
            <Stack spacing={4} direction="row">
              <Badge color="success" badgeContent={1000} max={9}>
                <ChatBubbleOutlineIcon/>
              </Badge>
            </Stack>
          </div>
          <div className="item">
          <Stack direction="row">
            <Avatar alt="Ben Sharp" src="https://pixabay.com/vectors/blank-profile-picture-mystery-man-973460/"/>
          </Stack>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar