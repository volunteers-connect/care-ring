import React from 'react'
import {StyleSheet, Dimensions, View, Image} from 'react-native'
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Title
} from 'native-base'

const styles = StyleSheet.create({
  name: {
    fontSize: 30
  }
})

const OrgEventCard = props => {
  return (
    <Card>
      <CardItem
        button
        onPress={() => props.navigation.navigate('OrgEventPage', props.event)}
      >
        <Left>
          <Title>
            <Text style={{fontFamily: 'Roboto'}}>{props.event.title}</Text>
          </Title>
        </Left>
      </CardItem>
      <CardItem
        cardBody
        button
        onPress={() => props.navigation.navigate('OrgEventPage', props.event)}
      >
        <Image
          source={{uri: `${props.event.organization.orgImage}`}}
          style={{height: 200, width: null, flex: 1}}
        />
      </CardItem>
      <CardItem
        button
        onPress={() => props.navigation.navigate('OrgEventPage', props.event)}
      >
        <Body
          style={{
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Text style={{fontFamily: 'Roboto'}}>{props.event.address}</Text>
        </Body>
      </CardItem>
    </Card>
  )
}

export default OrgEventCard
