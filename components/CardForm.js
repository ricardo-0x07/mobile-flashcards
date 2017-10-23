import React, { Component } from 'react';
import { Button, Text } from 'native-base';
import { View, Platform } from 'react-native';
import { Card, CardSection, Input } from './common';
import { connect } from 'react-redux';
import {cardUpdate, addCard, receiveDecks} from '../actions';
import { getDeck, addCardToDeck } from '../utils/api';

class CardForm extends Component {
    static navigationOptions = {
        title: 'Card Form'
    };
    componentDidMount() {
        this.props.receiveDecks();
    }
    addCard = (key, card) => {
        addCardToDeck({key, card})
            .then(() => {
                this.props.navigation.navigate('DeckView', {deck: this.props.deck});
                this.props.cardUpdate({ prop: 'question', value: ''});
                this.props.cardUpdate({ prop: 'answer', value: ''});
            });
    }
    render() {
        console.log('CardForm render this.props',this.props);
        const { question, answer, deck} = this.props;
        const { title } = deck;
        return (
            <View style={styles.container}>
                <Card style={styles.card}>
                    <CardSection style={styles.cardSection}>
                        <Input 
                            label="Question"
                            placeholder="New Card Question"
                            value={question}
                            onChangeText={value => this.props.cardUpdate({ prop: 'question', value})}
                        />
                    </CardSection>
                    <CardSection style={styles.cardSection}>
                        <Input 
                            label="Answer"
                            placeholder="Enter Card answer here."
                            value={answer}
                            onChangeText={value => this.props.cardUpdate({ prop: 'answer', value})}
                        />
                    </CardSection>
                    <CardSection style={styles.cardSection}>
                        <Button style={styles.btn} onPress={() => this.addCard(title,{answer, question})}><Text>Submit</Text></Button>
                    </CardSection>
                </Card>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    titleStyle: {
        fontSize: 60,
        paddingLeft: 15,
        textAlign: 'center',
        justifyContent: 'center'
    },
    btn: {
        borderRadius: 5,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardSection: {
        borderColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: Platform.OS === 'ios' ? 16 : 2,
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 17,
        justifyContent: 'center',
        shadowColor: 'rgba(0,0,0,0.24)',
        shadowOffset: {
            width: 0,
            height: 3,
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    const { decks } = state;
    const { question, answer } = state.cardForm;
    return {
        deck: decks.filter(item => item.title = ownProps.navigation.state.params.deck.title)[0],
        question,
        answer
    };
};
export default connect(mapStateToProps, {
    cardUpdate,
    addCard,
    receiveDecks
})(CardForm);
