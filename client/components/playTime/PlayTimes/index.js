import { connect } from 'react-redux'
import services from '../../../services/PlayTime'
import * as PlayTimeActions from '../../../actions/playTime'
import * as RouterActions from '../../../actions/router'
import React from 'react';
import DatePicker from 'react-toolbox/lib/date_picker';
import Input from 'react-toolbox/lib/input';
import style from './style.css';

const uuidv1 = require('uuid/v1');
const PlayTimeDto = require('shared/Contracts/DTOs/PlayTimeDto');





class PlayTimes extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            playTimes: [],
            selectedPlayTimeCard: null
        }

    }

    componentWillMount(){
        let player = this.props.player;
        this.setPlayTimesForPlayer(player.id);

        
    }

    setPlayTimesForPlayer = (playerId)=>{
        services.getPlayTimesByPlayerId(playerId)
        .then(res=>{
            if (res.ok) {
                return res.json()
                .then(playTimes => {
                    this.setState({playTimes});
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

    clickHadler=(id)=>{
        services.GetPlayTimeCardInfo(id)
        .then(res=>{
            if (res.ok) {
                return res.json()
                .then(cardInfo => {
                    this.setState({selectedPlayTimeCard:cardInfo});
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
        let playTimes = this.state.playTimes;
        let playTimeComps = playTimes.map((pt)=>{
            return <h3 key={pt.id} onClick={()=>this.clickHadler(pt.id)} className={style.playTime}> {pt.startDateTime} </h3>
        })
        debugger;
        let cardComp = this.state.selectedPlayTimeCard;
        return(
            <div className={style.playTimeContainer}>
                <div className={style.playTimeList}>
                    {playTimeComps}
                </div>
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
  )(PlayTimes)


//export default Rink;