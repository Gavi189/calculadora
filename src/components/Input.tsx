import React, { Component } from "react";
import { TextInput, View } from "react-native";

interface InputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

export default class Input extends Component<InputProps> {
  render() {
    return (
      <View>
        <TextInput
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChangeText={this.props.onChangeText}
        />
      </View>
    );
  }
}
