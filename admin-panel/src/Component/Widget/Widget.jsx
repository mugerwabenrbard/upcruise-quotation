import './Widget.scss'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccountBalanceWallet from '@mui/icons-material/AccountBalanceWallet';

const Widget = ({type}) => {
    let data

    var amount = 100
    var diff = 20

    switch (type) {
        case "users":
            data = {
                title: "USERS",
                link: "user details",
                isMoney: false,
                icon: <PersonIcon className='icon' style={{color: 'crimson', backgroundColor:'rgba(255,0,0,0.2)'}}/>
            }
            break;
    
            case "order":
            data = {
                title: "ORDERS",
                link: "view orders",
                isMoney: false,
                icon: <ShoppingCartIcon className='icon' style={{color: 'goldenrod', backgroundColor:'rgba(215,165,32,0.2)'}}/>
            }
            break;
    
            case "earning":
            data = {
                title: "EARNINGS",
                link: "view earnings",
                isMoney: true,
                icon: <AccountBalanceWallet className='icon' style={{color: 'green', backgroundColor:'rgba(0,128,0,0.2)'}}/>
            }
            break;
    
            case "balance":
            data = {
                title: "BALANCE",
                link: "view balance",
                isMoney: true,
                icon: <MonetizationOnIcon className='icon' style={{color: 'purple', backgroundColor:'rgba(128,0,128,0.2)'}}/>
            }
            break;
    
        default:
            break;
    }
  return (
    <div className='widget'>
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "$. "}{amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <ArrowDropUpIcon/> 
                {diff}%
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget