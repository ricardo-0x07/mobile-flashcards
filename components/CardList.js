import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import lodash from 'lodash';
import { receiveDecks, clear } from '../actions';
import CardListItem from './CardListItem';
import { getDeck } from '../utils/api';

class CardList extends Component {
    state = {
        title: '',
        questions: []
    }
    componentWillMount() {
        console.log('componentDidMount  this.props', this.props);
        getDeck(this.props.navigation.state.params.deck.title)
            .then(deck => this.setState({deck}))
        this.props.receiveDecks();
    }
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps nextProps', nextProps); 
    }
    onRowPress = () => {
        console.log('Navigate to DeckViews this.props', this.props);
        this.props.navigation.navigate('DeckView', {deck: this.state.deck})
    }
    renderRow = (card) => {
        console.log('renderRow card', card)
        return <CardListItem card={card} onRowPress={() => this.props.navigation.navigate('DeckView', {card: card.item})}/>
    }
    render() {
        console.log('CardList render this', this);
        const { deck } = this.state;
        if(!deck) {
            return (
                <View>
                    <Text>Loading</Text>
                </View>
            )
        }
        return (
            <FlatList
            data={deck.questions}
            renderItem={this.renderRow}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const { decks } = state;

    return {
        decks
    };
}

export default connect(mapStateToProps, { receiveDecks, clear })(CardList);