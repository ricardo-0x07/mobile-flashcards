import React, { Component } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Button, Text } from 'native-base';
import { Card, CardSection, Input } from './common';
import { connect } from 'react-redux';
import { addDeck, deckUpdate, clear } from '../actions';

class DeckForm extends Component {
    static navigationOptions = {
        title: 'Deck Form'
    };
    addDeck = (title) => {
        this.props.addDeck(title);
        this.props.navigation.navigate('Home', {deck: title});
        this.props.deckUpdate({ prop: 'title', value: ''})
    }
    render() {
        return (
            <View style={styles.container}>
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
const mapStateToProps = (state) => {
    const { title } = state.deckForm;
    return {
        title
    };
};
export default connect(mapStateToProps, {
    addDeck,
    deckUpdate,
    clear
})(DeckForm);

