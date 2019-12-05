import React from 'react'
import {StyleSheet, Dimensions, View, Image} from 'react-native'
import {Button, Text, Title} from 'native-base'
import {logout} from '../store/singleVolunteer'
import {useDispatch} from 'react-redux'
import {withNavigation} from 'react-navigation'

const VolLogoutButton = props => {
  const dispatch = useDispatch()

  handleLogOut = () => {
    dispatch(logout())
    props.navigation.navigate('Login')
  }

  return (
    <Button
      style={{backgroundColor: '#F5B39D', justifyContent: 'center'}}
      onPress={() => handleLogOut()}
    >
      <Text style={{color: 'white'}}>Sign Out</Text>
    </Button>
  )
}

export default withNavigation(VolLogoutButton)
