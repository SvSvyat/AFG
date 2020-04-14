import React, { Component } from "react"
import { Dimensions ,StyleSheet, TextInput, Text, View, TouchableOpacity, ViewStyle } from 'react-native';

import { styles, CustomButton } from './Style'

/*
*
    @brief: Pop-up component for request user answer.
*
*/

export default class PopUpComponent extends Component {
    constructor(props: any, 
                buttons: CustomButton[],
                handler?: (...args: any[]) => void) 
    {    
        super(props);

        buttons.forEach(button => {
            console.log(button.text);
        });
    }

    render() {
        return (null);
    }
}