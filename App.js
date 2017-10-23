import React from 'react';
import ReduxThunk from 'redux-thunk';
import { Ionicons, FontAwesome, Entypo } from '@expo/vector-icons';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider }  from 'react-redux';
import reducers from './reducers';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { white, purple } from './utils/colors';
import { Constants } from 'expo';
import { setLocalNotification } from './utils/helpers';
import CardForm from './components/CardForm';
import DeckForm from './components/DeckForm';
import DeckList from './components/DeckList';
import DeckView from './components/DeckView';
import CardList from './components/CardList';
import QuizView from './components/QuizView';


function UdaciStatusBar ({ backgroundColor, ...props }) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({tintColor}) => <Ionicons name='ios-list-box-outline' size={30} color={tintColor}/>
    }
  },
  DeckForm: {
    screen: DeckForm,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({tintColor}) => <Ionicons name='ios-add-circle-outline' size={30} color={tintColor}/>
    }
  }
}, {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? 'yellow' : white,
      // tintColor: 'yellow',
      style: {
        height: 56,
        backgroundColor: Platform.os === 'ios' ? white : purple,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
});

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
  CardForm: {
    screen: CardForm,
    navigationOptions: ({ navigation, tintColor }) => ({
      headerLeft: ( <Entypo name='chevron-left' size={40} color={white} onPress={() => navigation.navigate('DeckView', {deck: navigation.state.params.deck})}/> ),
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    })
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: ({ navigation, tintColor }) => ({
      headerLeft: ( <Entypo name='chevron-left' size={40} color={white} onPress={() => navigation.navigate('Home', {deck: navigation.state.params.deck})}/> ),
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    })
},
CardList: {
  screen: CardList,
  navigationOptions: ({ navigation, tintColor }) => ({
      headerLeft: ( <Entypo name='chevron-left' size={40} color={white} onPress={() => navigation.navigate('DeckView', {deck: navigation.state.params.deck})}/> ),
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    })
},
QuizView: {
    screen: QuizView,
    navigationOptions: ({ navigation, tintColor }) => ({
        headerLeft: ( <Entypo name='chevron-left' size={40} color={white} onPress={() => navigation.navigate('DeckView', {deck: navigation.state.params.deck})}/> ),
        headerTintColor: white,
        headerStyle: {
          backgroundColor: purple,
        }
      })
  }
});

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    const store=createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <UdaciStatusBar backgroundColor={purple} barStyle='light-content' />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
