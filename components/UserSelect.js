import React, {useEffect} from 'react'
import {ImageBackground, StyleSheet, Dimensions} from 'react-native'
import {Container, Content, Text, Button, Card, Title} from 'native-base'

const {height, width} = Dimensions.get('window')

const UserSelect = props => {
  return (
    <React.Fragment>
      <Container style={styles.container}>
        <ImageBackground
          source={require('../assets/images/chicago.jpg')}
          style={styles.backgroundImage}
        >
          <Content>
            <Card transparent style={styles.card}>
              <Text style={styles.title}>CareRing</Text>
              <Text style={styles.subText}>
                Connecting volunteers with nonprofits
              </Text>
            </Card>
            <Button
              block
              info
              onPress={() => props.navigation.navigate('VolLogin')}
              style={styles.topButton}
            >
              <Title>
                <Text
                  style={{
                    color: 'white',
                    textShadowColor: 'pink',
                    textShadowRadius: 1,
                    fontFamily: 'Roboto'
                  }}
                >
                  Volunteer
                </Text>
              </Title>
            </Button>
            <Button
              block
              warning
              style={styles.bottomButton}
              onPress={() => props.navigation.navigate('OrgLogin')}
            >
              <Title>
                <Text
                  style={{
                    color: 'white',
                    textShadowColor: 'orange',
                    textShadowRadius: 1,
                    fontFamily: 'Roboto'
                  }}
                >
                  Organization
                </Text>
              </Title>
            </Button>
          </Content>
        </ImageBackground>
      </Container>
    </React.Fragment>
  )
}

UserSelect.navgiationOptions = {
  header: null
}

const styles = StyleSheet.create({
  allText: {
    fontFamily: 'Roboto'
  },
  bottomButton: {
    marginTop: 40,
    backgroundColor: '#F5B39D'
  },
  topButton: {backgroundColor: '#F16286', marginTop: 270},
  backgroundImage: {width: width, height: height},
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  backgroundImage: {width: width, height: height},
  title: {
    fontWeight: 'bold',
    fontSize: 50,
    color: 'white',
    marginTop: 50,
    fontFamily: 'Roboto'
  },
  subText: {color: 'white', fontFamily: 'Roboto'},
  card: {display: 'flex', flexDirection: 'column', alignItems: 'center'}
})

export default UserSelect
