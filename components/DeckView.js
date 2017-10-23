import React, { Component } from 'react';
import { TouchableWithoutFeedback, View, Animated, Platform } from 'react-native';
import { Button, Text } from 'native-base';
import { Card, CardSection, Input } from './common';
import { getDeck } from '../utils/api';

class DeckView extends Component {
    static navigationOptions = {
        title: 'Deck View'
    };
    state = {
        deck: {
            title: '',
            questions: []
        },
        opacity: new Animated.Value(0)
    }
    componentDidMount() {
        getDeck(this.props.navigation.state.params.deck.title)
            .then(deck => this.setState({deck, key: this.props.navigation.state.key}))
        const { opacity }  = this.state;
        Animated.timing(opacity, { toValue: 1, duration: 1000 }).start();
    }    
    render() {
        const { title, questions } = this.state.deck;
        const { opacity }  = this.state;
        return (
            <Animated.View style={[styles.view, { opacity }]}>
                <Card style={styles.card}>
                    <CardSection style={styles.cardSection}>
                        <Text style={styles.titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    <CardSection style={styles.cardSection}>
                        <Text style={[{fontSize: 30}, styles.titleStyle]}>
                            {questions.length} Cards
                        </Text>
                    </CardSection>
                    <CardSection style={styles.cardSection}>
                        <Button light bordered style={[styles.btn,{borderColor: '#000'}]} onPress={() => this.props.navigation.navigate('CardForm', {deck: this.props.navigation.state.params.deck})}><Text style={{color: '#000'}}>Add Card</Text></Button>
                    </CardSection>
                    <CardSection style={styles.cardSection}>
                        <Button warning style={[styles.btn, {backgroundColor: '#000'}]} onPress={() => this.props.navigation.navigate('QuizView', {deck: this.props.navigation.state.params.deck})}><Text>Start Quiz</Text></Button>
                    </CardSection>
                </Card>
            </Animated.View>
        );
    }
}

const styles = {
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
    view: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center'
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

export default DeckView;
