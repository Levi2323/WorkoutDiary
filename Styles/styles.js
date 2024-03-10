import { StatusBar, StyleSheet } from "react-native"
import { MD3LightTheme } from "react-native-paper"
import { moderateScale, verticalScale, horizontalScale } from "../helper/ResponsiveMetrics"

export const Style = StyleSheet.create({
    container:{
        marginTop: StatusBar.currentHeight + 10,
        padding: moderateScale(20),
    },
    textInput:{
        marginBottom: verticalScale(10),
    },
    header: {
        marginBottom: verticalScale(20),
    },
    card:{
        marginHorizontal: horizontalScale(10),
        marginVertical: verticalScale(3),
        borderWidth: moderateScale(1),
        borderColor: '#1B2533',
    },

    cardText:{
        color: '#1B2533',
    },

    sumView:{
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: moderateScale(1),
        borderRadius: moderateScale(5),
        padding: moderateScale(5),
    },

    textInput:{
        borderColor: '#1B2533',
    },
    
    pressable: {
        flexDirection: 'row',
        padding: moderateScale(10),
        borderRadius: moderateScale(5),
        borderWidth: moderateScale(1),
        borderColor: '#1B2533',
        backgroundColor: '#A2C5D6',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: verticalScale(10),
    },

    addworkoutScreenView: {
        padding: moderateScale(20),
        flex: 1,
        justifyContent: 'space-evenly',
        backgroundColor: '#D8EDFF'
    },

    backgroundColor: {
        backgroundColor: '#D8EDFF',
        flex: 1
    },

    totals: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: moderateScale(10),
    },

    modal: {
        padding: moderateScale(20),
        flex: 1,
        justifyContent: 'space-between',
    },

    modalButton: {
        marginTop: verticalScale(10),
    },

    settings: {
        flex: 1,
        justifyContent: 'flex-start',
        padding: moderateScale(20),
        backgroundColor: '#D8EDFF'
    },

    settingsView: {
        padding: moderateScale(10),
        backgroundColor: '#D8EDFF',
        alignSelf: 'center',
        borderWidth: moderateScale(1),
        borderRadius: moderateScale(5),
        borderColor: '#1B2533',
    },
    
    settingsText: {
        fontSize: moderateScale(20),
        color: '#1B2533',
        marginBottom: verticalScale(20),
    },

    radioButtonContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: verticalScale(10),
        paddingHorizontal: horizontalScale(30),
    },

    radioLabel: {
        marginRight: horizontalScale(10),
    },

    circle: {
        height: verticalScale(28),
        width: horizontalScale(28),
        borderRadius: moderateScale(14),
        borderWidth: moderateScale(1),
        borderColor: '#1B2533',
        alignItems: 'center',
        justifyContent: 'center',
    },

    checkedCircle: {
        width: horizontalScale(15),
        height: verticalScale(15),
        borderRadius: moderateScale(7),
        backgroundColor: '#1B2533',
    },
    optionsTabBarHeader: {
        tabBarStyle: {backgroundColor: '#395F80'}, 
        tabBarLabelStyle: {color: '#D8EDFF'}, 
        headerStyle: {backgroundColor: '#395F80'},
        headerTitleStyle: {color: '#D8EDFF'},

    }
})

export const Theme = {
        ...MD3LightTheme,
        colors: {
            ...MD3LightTheme.colors,
            primary: '#1B2533',
            accent: '#A2C5D6',
            text: '#1B2533',
        }
    }
    



