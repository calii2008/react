import React from "react";
import {View , Text , StyleSheet , Button , TouchableOpacity} from 'react-native'

const ButtonScreen = () => {
    let counter , counterT = 0;
    return(
        <View>
            <Text>Button Screen</Text>
            <Button
            title="Click me "
            color="pruple"
            onPress={() => console.log('Button Clicked: ', counter++)}
            />
            <TouchableOpacity
            onPress={() => console.log(' TouchableOpacity Clicked: ', counterT++)}
            >
                <Text>Click Touchable Element</Text>

            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({

});

export default ButtonScreen;
