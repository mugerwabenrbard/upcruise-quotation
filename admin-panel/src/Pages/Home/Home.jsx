import Chart from "../../Component/chart/Chart"
import Featured from "../../Component/featured/Featured"
import Navbar from "../../Component/Navbar/Navbar"
import Sidebar from "../../Component/Sidebar/Sidebar"
import Tables from "../../Component/Table/Table"
import Widget from "../../Component/Widget/Widget"
import "./home.scss"

const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <div className="widgets">
          <Widget type="users"/>
          <Widget type="order"/>
          <Widget type="earning"/>
          <Widget type="balance"/>
        </div>
        <div className="charts">
          <Featured/>
          <Chart aspect={2/1} title="Last 6 Months ( revenue)"/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Tables/>
        </div>
      </div>
    </div>
  )
}

export default Home