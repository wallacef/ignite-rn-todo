import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export function Empty() {
    return (
        <View style={styles.emptyListContainer}>
            <Image
                source={require('../../../../assets/clipboard.png')}
            />
            <Text style={styles.emptyListTitleText}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={styles.emptyListDescriptionText}>Crie tarefas e organize seus itens a fazer</Text>
        </View>
    )
}