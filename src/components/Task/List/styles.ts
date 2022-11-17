import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#1a1a1a',
        flex: 1,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: -25,
        left: 13
    },
    textInput: {
        flex: 1,
        width: '100%',
        borderWidth: 1,
        borderColor: '#0d0d0d0',
        fontFamily: 'Inter_400Regular',
        backgroundColor: '#262626',
        color: '#fff',
        height: 54,
        padding: 16,
        borderRadius: 8
    },
    buttonAdd: {
        backgroundColor: '#1e6f9f',
        height: 54,
        width: 54,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginLeft: 5
    },
    infoTask: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 18,
        marginTop: 32
    },
    infoGroupTask: {
        flexDirection: 'row',
    },
    infoCreatedTaskText: {
        fontFamily: 'Inter_700Bold',
        fontSize: 14,
        fontWeight: '700',
        color: '#4ea8de'
    },
    infoDoneTaskText: {
        fontFamily: 'Inter_700Bold',
        fontSize: 14,
        fontWeight: '700',
        color: '#8284fa'
    },
    textCountTask: {
        width: 30,
        height: 22,
        color: '#fff',
        backgroundColor: '#333333',
        marginLeft: 10,
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 100,
        fontSize: 14,
        fontWeight: "700",
    },
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