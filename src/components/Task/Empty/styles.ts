import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    emptyListContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 56,
        borderTopColor: '#333333',
        borderTopWidth: 1,
    },
    emptyListTitleText: {
        color: '#808080',
        fontWeight: '700',
        fontSize: 14,
        marginTop: 16,
        fontFamily: 'Inter_700Bold'
    },
    emptyListDescriptionText: {
        color: '#808080',
        fontFamily: 'Inter_400Regular',
        fontSize: 14
    }
})