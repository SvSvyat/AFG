import { StyleSheet, ViewStyle } from 'react-native';
  
// Decalre custom button interface.

export interface CustomButton {
    text:        string;
    buttonStyle: any;
}

export interface CustomButtonConstructor {
    new (text: string, button: any): CustomButton;
}

export var CustomButton: CustomButtonConstructor;

// Styles.

export const styles = StyleSheet.create({
    container: {                      
      marginTop: 150,
      backgroundColor: '#ededed',
      flexWrap: 'wrap'
    }
 }); 

const agreeButton = StyleSheet.create({
    primary: {                        
        flex: 1,
        height: 70,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20
    }
});

export const nayButton = StyleSheet.create({
    primary: {                        
        flex: 1,
        height: 70,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20
    }
});

export const okButton = StyleSheet.create({
    primary: {                        
        flex: 1,
        height: 70,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20
    }
});

export {agreeButton};