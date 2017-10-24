import React, { Component } from 'react';
import { View, KeyboardAvoidingView } from 'react-native';
import { Button, Text } from 'native-base';
import { Card, CardSection, Input } from './common';
import { connect } from 'react-redux';
import { addDeck, deckUpdate, clear } from '../actions';
import styles from './FormStyles';

class DeckForm extends Component {
    static navigationOptions = {
        title: 'Deck Form'
    };
  state = {
    behavior: 'padding'
  };
    addDeck = (title) => {
        this.props.addDeck(title);
        this.props.navigation.navigate('Home', {deck: title});
        this.props.deckUpdate({ prop: 'title', value: ''})
    }
    render() {
        return (
            <KeyboardAvoidingView behavior={this.state.behavior} style={styles.container}>
                <Card style={styles.card}>
                    <CardSection style={styles.cardSection}>
                        <Input 
                            label="Title"
                            placeholder="New Deck Title"
                            value={this.props.title}
                            onChangeText={value => this.props.deckUpdate({ prop: 'title', value})}
                        />
                    </CardSection>
                    <CardSection style={styles.cardSection}>
                        <Button style={styles.btn} onPress={() => this.addDeck(this.props.title)}><Text>Submit</Text></Button>
                    </CardSection>
            </Card>
            </KeyboardAvoidingView>
        );
    }
}


const mapStateToProps = (state) => {
    const { title } = state.deckForm;
    return {
        title
    };
};
export default connect(mapStateToProps, {
    addDeck,
    deckUpdate
})(DeckForm);

