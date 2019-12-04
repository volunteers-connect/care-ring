// Navigators
import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from 'react-navigation'

// LoginStack screens
import UserSelect from '../components/UserSelect'
import VolLogin from '../components/VolLogin'
import OrgLogin from '../components/OrgLogin'

// EventStack screens
import EventList from '../components/EventList'
import EventPage from '../components/EventPage'
import EventCard from '../components/EventCard'
import VolSignup from '../components/VolSignup'
import OrgSignup from '../components/OrgSignup'

// MapStack screens
import ReactMap from '../components/ReactMap'
import HomeScreen from '../components/HomeScreen'

// OrgEventStack screens
import OrgEventList from '../components/OrgEventList'
import OrgEventPage from '../components/OrgEventPage'

//stack for login page
export const LoginStack = createStackNavigator(
  {
    UserSelect: UserSelect,
    VolLogin: VolLogin,
    OrgLogin: OrgLogin
  },
  {
    initialRouteName: 'UserSelect'
  }
)

//OrgProfileStack Screens
import OrgProfile from '../components/OrgProfile'
import OrgEditForm from '../components/OrgEditForm'

//stack for Not Logged In
// export const NotLoggedInStack = createStackNavigator(
//   {
//     //LoginPage: LoginPage
//   },
//   {
//     //initialRouteName: 'LoginPage'
//   }
// )

//VolunteerProfileStack Screens
import VolunteerProfile from '../components/VolunteerProfile'
import VolEditForm from '../components/VolEditForm'
import EventEditForm from '../components/EventEditForm'
// stack for VolunteerEvents tab
export const EventsStack = createStackNavigator(
  {
    EventList: EventList,
    EventPage: EventPage,
    EventCard: EventCard,
    EventEditForm: EventEditForm
  },
  {
    initialRouteName: 'EventList'
  }
)

// stack for Map tab
export const MapStack = createStackNavigator(
  {
    ReactMap: ReactMap,
    EventPage: EventPage,
    EventCard: EventCard
  },
  {
    initialRouteName: 'ReactMap'
  }
)

export const OrgProfileStack = createStackNavigator(
  {
    OrgProfile: OrgProfile,
    OrgEventPage: OrgEventPage,
    OrgEditForm: OrgEditForm
  },
  {initialRouteName: 'OrgProfile'}
)

// stack for Volunteer Profile tab
export const VolunteerProfileStack = createStackNavigator(
  {
    // VolunteerProfile: VolunteerProfile,
    // VolunteerProfileEdit: VolunteerProfileEdit
    VolunteerProfile: VolunteerProfile,
    VolEditForm: VolEditForm
  },
  {
    initialRouteName: 'VolunteerProfile'
  }
)

//stack for volunteer sign up page
export const VolSignupStack = createStackNavigator(
  {
    VolSignupPage: VolSignup
  },
  {
    initialRouteName: 'VolSignupPage'
  }
)

//stack for organization sign up page
export const OrgSignupStack = createStackNavigator(
  {
    OrgSignupPage: OrgSignup
  },
  {
    initialRouteName: 'OrgSignupPage'
  }
)

export const VolunteerTabs = createBottomTabNavigator(
  {
    Events: EventsStack,
    Map: MapStack,
    Profile: VolunteerProfileStack
  },
  {
    order: ['Events', 'Map', 'Profile']
  }
)

export const OrgEventsStack = createStackNavigator({
  OrgEventList: OrgEventList,
  OrgEventPage: OrgEventPage,
  OrgProfile: OrgProfile
})

export const OrganizationTabs = createBottomTabNavigator({
  Events: OrgEventsStack,
  // AddEvent: AddEventStack,
  Profile: OrgProfileStack
})

export const EntireApp = createSwitchNavigator({
  Login: LoginStack,
  Organization: OrganizationTabs,
  Volunteer: VolunteerTabs,
  VolSignup: VolSignupStack,
  OrgSignup: OrgSignupStack
})
