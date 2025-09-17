import React, { Component } from "react";
import { Text, View } from "react-native";

interface TitleProps {
  titleName: string;
}

export default class Title extends Component<TitleProps> {
  render() {
    return (
      <View>
        <Text>{this.props.titleName}</Text>
      </View>
    );
  }
}
