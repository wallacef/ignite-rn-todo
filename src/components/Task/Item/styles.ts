import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 78,
        backgroundColor: '#262626',
        paddingVertical: 12,
        paddingHorizontal: 8,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#333333',
        marginBottom: 10
    },
    containerItem: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 10
    },
    containerTextItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textItem: {
        fontFamily: 'Inter_400Regular',
        fontWeight: '400',
        color: '#f2f2f2',
        fontSize: 14,
        marginLeft: 10
    },
    textItemDone: {
        fontFamily: 'Inter_400Regular',
        fontWeight: '400',
        color: '#808080',
        fontSize: 14,
        marginLeft: 10,
        textDecorationLine: 'line-through'
    },
    iconWithoutCheck: {
        borderColor: '#4ea8de',
        borderWidth: 2,
        width: 21,
        height: 21,
        borderRadius: 100
    },
    iconChecked: {
        backgroundColor: '#5e60ce',
        width: 21,
        height: 21,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconTrash: {
        height: 18,
        width: 17
    }
})