import React, { Component } from 'react';
import { Button, Text } from 'native-base';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Card, CardSection, Input } from './common';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { getDeck, addCardToDeck } from '../utils/api';
import { white } from '../utils/colors';
import styles from './FormStyles';

class CardForm extends Component {
    static navigationOptions = {
        title: 'Card Form'
    };
    state = {
        behavior: 'padding',
        deck: {
            title: '',
            questions: []
        }
    }
    componentDidMount() {
        getDeck(this.props.navigation.state.params.deck.title)
            .then(deck => this.setState({deck}))
    }    
    addCard = (key, card) => {
        addCardToDeck({key, card})
            .then(() => {
                this.props.navigation.navigate('DeckView', {deck: this.state.deck});
                this.props.cardUpdate({ prop: 'question', value: ''});
                this.props.cardUpdate({ prop: 'answer', value: ''});
            });
    }
    render() {
        const { question, answer} = this.props;
        const { title } = this.state.deck;
        return (
            <KeyboardAvoidingView behavior={this.state.behavior} style={styles.container}>
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
            </KeyboardAvoidingView>
        );
    }
}

const mapStateToProps = state => {
    const { question, answer } = state.cardForm;
    return {
        question,
        answer
    };
};
export default connect(mapStateToProps, actions)(CardForm);
