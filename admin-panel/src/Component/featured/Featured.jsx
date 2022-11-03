import './Featured.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const Featured = () => {
  return (
    <div className='featured'>
        <div className="top">
            <div className="title">Total Revenue</div>
            <MoreVertIcon fontSize='small'/>
        </div>
        <div className="bottom">
            <div className="featuredChart">
                <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
            </div>
            <p className="title">Total sales made today</p>
            <p className="amount">UGX. 3500</p>
            <p className="desc">Previous transactions processing. Last payments may not be include.</p>
            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult positive">
                        <ArrowDropUpIcon fontSize='small'/>
                        <div className="resultAmount">UGX. 12K</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Week</div>
                    <div className="itemResult negative">
                        <ArrowDropDownIcon fontSize='small'/>
                        <div className="resultAmount">UGX. 12K</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Month</div>
                    <div className="itemResult positive">
                        <ArrowDropUpIcon fontSize='small'/>
                        <div className="resultAmount">UGX. 12K</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured