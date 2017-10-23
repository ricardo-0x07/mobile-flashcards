import React, { Component } from 'react';
import { Button, Text } from 'native-base';
import { TouchableWithoutFeedback, View, Platform } from 'react-native';
import { Card, CardSection, Input } from './common';
import { getDeck } from '../utils/api';
import {
    clearLocalNotification,
    setLocalNotification
} from '../utils/helpers';

class QuizView extends Component {
    static navigationOptions = {
        title: 'Quiz View'
    };
    state = {
        deck: {
            title: '',
            questions: []
        },
        card: {
            question: '',
            answer: ''
        },
        isQuestion: true,
        currentCard: 0,
        showScore: false,
        score: 0
    }
    componentDidMount() {
        getDeck(this.props.navigation.state.params.deck.title)
            .then(deck => {
                this.setState({deck});
                this.setState({card: deck.questions[this.state.currentCard]});
            });
    }
    onButtonPress = (answer) => {
        let currentCard = this.state.currentCard + 1;
        let score = this.state.card.answer === answer ? this.state.score + 1 : this.state.score;
        if(!(currentCard < this.state.deck.questions.length)) {
            this.setState({showScore: true})
        } else {
            this.setState({
                currentCard,
                card: this.state.deck.questions[currentCard],
                score: score
            })    
        }
    }
    render() {
        if(this.state.showScore) {
            clearLocalNotification()
                .then(setLocalNotification());

            return (
                <View style={styles.container}>
                    <Card style={styles.card}>
                        <CardSection style={styles.cardSection}>
                            <Text>{this.state.deck.title} Quiz Complete</Text>
                        </CardSection>
                        <CardSection style={styles.cardSection}>
                            <Text>You Scored: { this.state.score * 100/this.state.deck.questions.length } %</Text>
                        </CardSection>
                        <CardSection style={styles.cardSection}>
                            <Button style={styles.btn} onPress={() => this.props.navigation.navigate('DeckView', {deck: this.state.deck})}><Text>Done</Text></Button>
                        </CardSection>
                        <CardSection style={styles.cardSection}>
                            <Button warning style={[styles.btn, {backgroundColor: '#000'}]} onPress={() => this.props.navigation.navigate('QuizView', {deck: this.state.deck})}><Text>Restart Quiz</Text></Button>
                        </CardSection>
                    </Card>
                </View>
            )
        }
        console.log('this.props', this.props);
        const { question, answer } = this.state.card;
        return (
            <View style={styles.container}>
                <Card style={styles.card}>
                    {this.state.isQuestion && <CardSection style={styles.cardSection}>
                        <Text style={styles.titleStyle}>
                            {question}
                        </Text>
                    </CardSection>}
                    {!this.state.isQuestion && <CardSection style={styles.cardSection}>
                        <Text style={[{fontSize: 30}, styles.titleStyle]}>
                        {answer}
                        </Text>
                    </CardSection>}
                    <CardSection style={styles.cardSection}>
                        <Text style={[{fontSize: 30}, styles.titleStyle]}>
                            {this.state.currentCard}/{this.state.deck.questions.length}
                        </Text>
                    </CardSection>
                    <CardSection style={styles.cardSection}>
                        <Button transparent style={styles.btn} onPress={() => this.setState({isQuestion: !this.state.isQuestion})}>
                            <Text style={{color: 'red', fontWeight: 'bold'}}>{this.state.isQuestion ? "Answer" : "Question"}</Text>
                        </Button>
                    </CardSection>
                    <CardSection style={styles.cardSection}>
                        <Button success style={styles.btn} onPress={() => this.onButtonPress('Yes')}><Text>Correct</Text></Button>
                    </CardSection>
                    <CardSection style={styles.cardSection}>
                        <Button danger style={styles.btn} onPress={() => this.onButtonPress('No')}><Text>Incorrect</Text></Button>
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
export default QuizView
