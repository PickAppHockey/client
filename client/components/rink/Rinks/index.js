import { connect } from 'react-redux'
import services from '../../../services/rink'
//import * as PlayerActions from '../../../actions/player'
import * as RouterActions from '../../../actions/router'
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';


import React from 'react';


class Rinks extends React.Component{
    render(){
        let rinks = this.props.rinks;

        let listRinks = rinks.map((rink)=> {
            return(

                <ListItem
                    //avatar='https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg'
                    key={rink.id}
                    caption={rink.name}
                    onClick={()=>this.props.goToRink(rink.id)}
                    //legend="Jonathan 'Jon' Osterman"
                    //rightIcon='star'
                />
                // <li key={rink.id}>
                //     <a onClick={()=>this.props.goToRink(rink.id)}>{rink.name}</a>
                // </li>
            ) 
            
        });
        return(
            <div>
                {/* <h1> Rinks </h1> */}

                <List selectable ripple>
                    <ListSubHeader caption="rinks" />
                    {listRinks}
                </List>
     
            </div>
        )
    }
}



function mapStateToProps(state) {
    return {
      rinks: state.rinks
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      goToRink:(id)=>dispatch(RouterActions.goToRink(id)),
      
      
      actions: {
        editPlayer: (payload)=>dispatch(PlayerActions.editPlayer(payload)),
      }
    }
  }
  
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Rinks)

//export default Rinks;