import { connect } from 'react-redux'
import services from '../../../services/PlayTime'
import * as PlayTimeActions from '../../../actions/playTime'
import * as RouterActions from '../../../actions/router'
import React from 'react';
import DatePicker from 'react-toolbox/lib/date_picker';
import Input from 'react-toolbox/lib/input';
const uuidv1 = require('uuid/v1');
const PlayTimeDto = require('shared/Contracts/DTOs/PlayTimeDto')




class EditPlayTime extends React.Component{

    getSelectedPlayTime = ()=>{
        let playTimeId = this.props.routeParams.id;
        let playTimes = this.props.playTimes;
        for(let i = 0; i < playTimes.length; i++){
            let playTime = playTimes[i];
            if(playTime.id === playTimeId){
                return selectedPlayTime = playTime;
            }
        };

    }



    editPlayTime = (playTime) =>{
        services.editPlayTime(playTime)
        .then(res=>{
            if (res.ok) {
                return res.json()
                .then(playTime => {
                    this.props.actions.editPlayTime(playTime);
                    this.props.goToAccount();
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
        
        let playTime = this.getSelectedPlayTime();

        return(
            <div>
                <h1> PlayTime </h1>
                <PlayTimeInput playTime={playTime} action={this.addPlayTime}/>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
      player: state.player
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      goToAccount:()=>dispatch(RouterActions.goToAccount()),
      
      
      actions: {
        addPlayTime: (payload)=>dispatch(PlayTimeActions.addPlayTime(payload)),
      }
    }
  }
  
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditPlayTime)





