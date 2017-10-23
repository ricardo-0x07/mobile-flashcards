import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection, Card } from './common';

class CardListItem extends React.PureComponent  {
    render() {
        const { question, answer } = this.props.card.item;
        return (
            <TouchableWithoutFeedback onPress={this.props.onRowPress} key={this.props.card.index}>
                <View>
                    <Card>
                        <CardSection>
                            <Text style={[styles.titleStyle, {fontSize: 20}]}>
                                {question}
                            </Text>
                        </CardSection>
                        <CardSection>
                            <Text style={styles.titleStyle}>
                                {answer}
                            </Text>
                        </CardSection>
                    </Card>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 20,
        paddingLeft: 15,
        textAlign: 'center'
    }
}
export default CardListItem;