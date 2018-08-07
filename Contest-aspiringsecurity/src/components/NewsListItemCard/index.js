import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

import Title from './../Title';
import Description from './../Description';

export default class NewsListItemCard extends Component {
  onCardPress = () => {
    const { navigation, data } = this.props;
    navigation.navigate('NewsArticleWeb', {
      title: data.title,
      url: data.url
    })
  }
  render() {
    const  { data } = this.props
    return (
      <TouchableOpacity onPress={this.onCardPress}>
        <View style={styles.card}>
          <Image style={styles.imageContainer}
          resizeMode="cover"
            source={{ uri: `${data.profile.image_url}`}}/>
          <View style={styles.contentContainer}>
            <Title style={styles.titleStyle}>
              {data.profile.first_name}{data.profile.last_name}
            </Title>
            <Description style={styles.descriptionStyle}>
              {data.profile.title}
            </Description>
            <Description style={styles.descriptionStyle}>
              {data.profile.bio}
            </Description>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}
