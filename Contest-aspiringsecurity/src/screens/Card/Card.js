import React, { Component } from 'react'
import * as Animatable from 'react-native-animatable';
import { Text } from 'react-native';
import { View, Image } from 'react-native'
import CardButtons from '../CardButtons'
import style from './style'
import Title from './../../components/Title';

const flip = {
  0: {
    rotateY: '0deg'
  },
  1: {
    rotateY: '180deg'
  }
}

class Card extends Component {
  constructor() {
    super()
    this.state = {
      isFlipping: false,
      isFront: true
    }
  }

  handleRotate = () => {
    const { navigation, data } = this.props;
    this.setState({
      isFlipping: true,
      isFront: !this.state.isFront
    })
    navigation.navigate('Home', {
      title: 'Welcome Mr Manu Sheel Gupta'
    })
    setTimeout(() => {
      this.setState({isFlipping: false})
    }, 1000)
  }

  handleRotate2 = () => {
    const { navigation, data } = this.props;
    this.setState({
      isFlipping: true,
      isFront: !this.state.isFront
    })
    navigation.navigate('Home', {
      title: 'Welcome Mr Manu Sheel Gupta'
    })
    setTimeout(() => {
      this.setState({isFlipping: false})
    }, 1000)
  }

  render() {
    return (
      <View style={style.container}>
      <Title>Welcome to EHRs Portal</Title>
        <Animatable.View animation={this.state.isFlipping ? flip : ''} style={style.cardContainer} duration={1000}>
        <View style={style.container1}>
        <Image
            resizeMode="cover"
            source={require('./logo.png')}/>
        <Title>Please click on button</Title>
        </View>
          {!this.state.isFlipping && (
            <CardButtons flip={this.handleRotate} flipTopRight={this.handleRotate2}/>
          )}
        </Animatable.View>
      </View>
    )
  }
}

export default Card;
