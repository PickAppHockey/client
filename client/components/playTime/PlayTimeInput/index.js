import { connect } from 'react-redux'
import services from '../../../services/PlayTime'
import * as PlayTimeActions from '../../../actions/playTime'
import * as RouterActions from '../../../actions/router'
import React from 'react';
import DatePicker from 'react-toolbox/lib/date_picker';
import Input from 'react-toolbox/lib/input';
const uuidv1 = require('uuid/v1');
const PlayTimeDto = require('shared/Contracts/DTOs/PlayTimeDto')




class PlayTimeInput extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            playTime: this.props.playTime,
            duration: (this.props.playTime.endDateTime - this.props.playTime.startDateTime)/60000,
        }
    }


    handleDateChange = (value) => {
        debugger;   
        let playTime = Object.assign({}, this.state.playTime);
        playTime.startDateTime = value;
        this.setState({playTime});
    };


    handleDurationChange = (value) => {
        let startDateTime = this.state.playTime.startDateTime;
        let endDateTime = new Date(startDateTime.getTime() + value*60*60000);
        let playTime = Object.assign({}, this.state.playTime);
        playTime.endDateTime = endDateTime;

        this.setState({playTime});
    };



    handleSave = () => {
        debugger;
        this.props.action(this.state.playTime);
    };
    
    getDurationMin=()=>{
        let playTime = this.state.playTime;
        let durationMin = (playTime.endDateTime - playTime.startDateTime)/60000;
        return durationMin;
    }


    render(){

        return(
            <div>
                <DatePicker label='date' sundayFirstDayOfWeek={true} onChange={this.handleDateChange} value={this.state.playTime.startDateTime} />
                <Input type="text" name="duration" value={this.getDurationMin()} onChange={this.handleDurationChange} label="duration(minutes)"/>
                <button onClick={this.handleSave}> save </button>
            </div>
        )
    }
}



export default PlayTimeInput;