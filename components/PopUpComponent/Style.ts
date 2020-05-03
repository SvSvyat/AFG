import { Dimensions, StyleSheet, ViewStyle } from 'react-native';

// Styles.

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    popUpContainer: {
        width: width * 0.8,
        height: height * 0.8,
        backgroundColor: 'pink',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 999
    },
 }); 

export const agreeButton = StyleSheet.create({
    primary: {                        
        flex: 1,
        height: 70,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20
    }, 
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

export const buttonStyle = {
    okButton: okButton,
    nayButton: nayButton,
    agreeButton: agreeButton
};
