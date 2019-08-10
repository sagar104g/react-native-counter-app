import React, { Component } from 'react';
import { View, Text, Button} from 'react-native';
import {connect} from 'react-redux';

class Counter extends Component {
    constructor(props) {
        super(props)
    }

    render() {    
        var value = this.props.value;
      return (
        <View style={{alignItems: 'center'}}>
          <Text>above</Text>
          <Text>{value ? this.props.value : 0}</Text>
          <Text>below</Text>
          <Button onPress = {this.props.decrement} title='negitive'/>
          <Button onPress = {this.props.increment} title='positive'/>
        </View>
      );
    }
}

const mapStateToProps = (state) => ({
    value : state.value
})

const mapDispatchToProps = (dispatch) => ({
    decrement : () => dispatch({type: 'positive'}),
    increment : () => dispatch({type: 'negetive'})
})

export default connect(mapStateToProps,mapDispatchToProps)(Counter);