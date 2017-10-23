import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, TouchableOpacity, View, StyleSheet, Platform } from 'react-native';
import { CardSection, Card } from './common';

class DeckListItem extends React.PureComponent  {
    render() {
        console.log('this.props', this.props);
        const { title, questions } = this.props.deck.item;
        return (
            <TouchableOpacity onPress={this.props.onRowPress} >
                <Card style={styles.card} >
                    <CardSection style={styles.cardSection}>
                        <Text style={styles.titleStyle} >
                            {title}
                        </Text>
                    </CardSection>
                    <CardSection style={styles.cardSection}>
                        <Text style={[styles.titleStyle, {fontSize: 20}]}>
                            {questions.length} Cards
                        </Text>
                    </CardSection>
                </Card>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 30,
        paddingLeft: 15,
        textAlign: 'center',
        justifyContent: 'center'
    },
    card: {
        flex: 2,
        backgroundColor: '#fff',
        borderRadius: Platform.OS === 'ios' ? 16 : 2,
        padding: 20,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 17,
        justifyContent: 'center',
        shadowColor: 'rgba(0,0,0,0.24)',
        shadowOffset: {
            width: 0,
            height: 3,
        }
    },
    cardSectionTop: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#FFF',
        paddingTop: 30
    },
    cardSectionBottom: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#FFF',
        paddingBottom: 20
    },
    cardSection: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#FFF',
        padding: 10
    },
    touch: {
        flexDirection: 'row',
        marginTop: 12
    }
})
export default DeckListItem;