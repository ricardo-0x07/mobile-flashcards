import React, { Component } from 'react';
import { TouchableWithoutFeedback, View, Animated } from 'react-native';
import { Button, Text } from 'native-base';
import { Card, CardSection, Input } from './common';
import { getDeck } from '../utils/api';
import { white, black } from '../utils/colors';
import styles from './DeckViewStyles';

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
                        <Button light bordered style={[styles.btn,{borderColor: black}]} onPress={() => this.props.navigation.navigate('CardForm', {deck: this.props.navigation.state.params.deck})}><Text style={{color: black}}>Add Card</Text></Button>
                    </CardSection>
                    <CardSection style={styles.cardSection}>
                        <Button warning style={[styles.btn, {backgroundColor: black}]} onPress={() => this.props.navigation.navigate('QuizView', {deck: this.props.navigation.state.params.deck})}><Text>Start Quiz</Text></Button>
                    </CardSection>
                </Card>
            </Animated.View>
        );
    }
}

export default DeckView;
