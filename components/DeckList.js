import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { AppLoading }  from 'expo';
import { Text, TouchableWithoutFeedback, View, StyleSheet } from 'react-native';
import lodash from 'lodash';
import DeckListItem from './DeckListItem';
import { getDecks } from '../utils/api';

class DeckList extends Component {
    static navigationOptions = {
        title: 'Decks'
    };
    state = {
        decks: []
    }
    componentWillMount() {
        getDecks()
            .then(decks => this.setState({decks}))
    }
    _keyExtractor = (item, index) => {
        return index
    };
    renderRow = (deck) => {
        return <DeckListItem deck={deck} onRowPress={() => this.props.navigation.navigate('DeckView', {deck: deck.item})}/>
    }
    render() {
        if(!this.state.decks.length > 0) {
            return (
                <View>
                    <AppLoading />
                    <Text>Create Your First Flash Cards Deck</Text>
                </View>
            )
        }
        return (
            <FlatList
            style={styles.container}
            data={this.state.decks}
            renderItem={this.renderRow}
            keyExtractor={this._keyExtractor}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default DeckList;