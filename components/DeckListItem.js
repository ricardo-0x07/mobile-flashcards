import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, TouchableOpacity, View, StyleSheet, Platform } from 'react-native';
import { CardSection, Card } from './common';
import { white } from '../utils/colors';
import styles from './DeckListItemStyles'

class DeckListItem extends React.PureComponent  {
    render() {
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

export default DeckListItem;