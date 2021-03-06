import { connect } from 'react-redux'
import React, { Component } from 'react'
import Input from 'react-toolbox/lib/input';
import services from '../../../services/player'
import * as PlayerActions from '../../../actions/player'
import * as RouterActions from '../../../actions/router'


//const PlayerDto = require('shared/Contracts/DTOs/PlayerDto');



class RegisterPlayer extends Component {
  constructor(props){
    super(props)
    this.state = {
      player: {}
    }
    this.handle = {};
    this.attrs = ['username', 'hash', 'position', 'skillLevel', 'gender'];
    this.attrs.forEach((key)=>{
      this.handle[key] = (val)=>{
        this.state.player[key] = val
        this.setState({
          player: this.state.player,
        });
      }
    })
  }


  registerPlayer=()=>{
    let player = this.state.player;
    services.register(player)
    .then(res=>{
      if (res.ok) {
        return res.json()
          .then(player => {
            this.props.actions.addPlayer(player);
            this.props.goToRinks();
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

  render() {
    return (
      <div>
        <h1>Registration</h1>
        <div>
        {
          [this.attrs.map((key)=>{
            const inputType = (key === 'hash')? "password" : "text";
            return <Input type={inputType} name={key} value={this.state.player[key]} onChange={this.handle[key]} label={key}/>
          })]
        }
        <button onClick={this.registerPlayer}> save </button>
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
    
    goToRinks:()=>dispatch(RouterActions.goToRinks()),
    //goToAccount:()=>dispatch(RouterActions.goToAccount()),
    
    actions: {
      addPlayer: (payload)=>dispatch(PlayerActions.addPlayer(payload)),
    }
  }
}


export default connect(
  null,
  mapDispatchToProps
)(RegisterPlayer)




//export default RegisterPlayer
