import React, {useEffect} from 'react'
import {StyleSheet, Dimensions, View, Image} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {getEventsThunk} from '../store/allEvents'
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
  Right
} from 'native-base'

const EventPage = props => {
  //console.log(props.navigation.state.params)
  const event = props.navigation.state.params
  return (
    <React.Fragment>
      <Content>
        <Text>{event.title}</Text>
        <Image
          source={{
            uri:
              'https://res.cloudinary.com/dssu5deur/image/upload/v1574461329/capstone/1_pvkdas.jpg'
          }}
          style={{flex: 1, width: null, height: 400}}
        />
        <Text>Num Volunteers Needed: {event.volunteerTargetNum}</Text>
        <Text>Organization Name</Text>
        <Text></Text>
        <Text>
          {event.startTime.slice(5, 9)} from {event.startTime.slice(12, 16)} -{' '}
          {event.endTime.slice(12, 16)}
        </Text>
        <Text>{event.address}</Text>
        <Text>{event.description}</Text>
        <Button>
          <Text>I'm Attending!</Text>
        </Button>
      </Content>
    </React.Fragment>
  )
}

export default EventPage
