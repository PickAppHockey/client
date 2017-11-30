import { connect } from 'react-redux'
import services from '../../../services/PlayTime';
import Button from 'ui/Button';
//import * as PlayerActions from '../../../actions/player'
import * as RouterActions from '../../../actions/router'
import AddPlayTime from "../../playTime/AddPlayTime";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'Recharts';
import moment from 'moment';

import React from 'react';

class Traffic extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            date: this.props.date,
            trafficInfo: null

        }
    }

    componentWillMount(){
        this.setTrafficInfo(this.state.date);
    }

    onClick =(incrementDay)=>{
 
        let date = new Date(this.state.date);
        let newDate = moment(this.state.date).add(incrementDay,"days").toDate();
        this.setTrafficInfo(newDate);
        this.setState({date:newDate});

    }

    setTrafficInfo=(date)=>{
        let startDateTime = date;
        let endDateTime = new Date();
        endDateTime =new Date(endDateTime.setHours(23,59,59,999));
        let rinkId = this.props.rinkId;
        services.GetPlayTimeTrafficByRinkAndTime(rinkId,startDateTime,endDateTime)
        .then(res=>{
            if (res.ok) {
                return res.json()
                .then(trafficInfo => {
                    this.setState({trafficInfo});
                })
            } 
            else {
                return res.json()
                .then(function(err) {
                    throw new Error("There's an error upstream and it says " + err.detail);
                });
                }
            })
        
    }

    render(){
        let trafficInfo = this.state.trafficInfo;
        let playTimes = (trafficInfo)? trafficInfo.trafficDistribution: [];
        return(
            <div>
                <h1> {moment(this.state.date).format("dddd, MMM DD, YYYY")} </h1>
                <LineChart width={600} height={300} data={playTimes} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <XAxis label={{ value: "Time", position: "insideBottomRight", dy: 10}} dataKey="timeInterval"/>
                    <YAxis label={{ value: "Traffic", position: "insideLeft", angle: -90,   dy: -10}}/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    {/* <Legend /> */}
                    <Line type="monotone" dataKey="traffic" stroke="#8884d8" activeDot={{r: 8}}/>
                    {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
                </LineChart>
                <Button onClick={()=>this.onClick(-1)}> prev </Button>
                <Button onClick={()=>this.onClick(1)}> next </Button>
            </div>
        )
    }
}

// function mapStateToProps(state) {
//     return {
//       rinks: state.rinks,
//       player: state.player
//     }
//   }
  
//   function mapDispatchToProps(dispatch) {
//     return {
//       goToRinks:()=>dispatch(RouterActions.goToRinks()),
      
      
//       actions: {
//         editPlayer: (payload)=>dispatch(PlayerActions.editPlayer(payload)),
//       }
//     }
//   }
  
  
  export default Traffic


//export default Rink;