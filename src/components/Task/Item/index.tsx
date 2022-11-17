import { Image, Text, TouchableOpacity, View, Alert } from "react-native";
import { styles } from "./styles";

type TItemTaskProps = {
    task: TTask
    setTasks: React.Dispatch<React.SetStateAction<TTask[]>>
}

export function ItemTask({ task, setTasks }: TItemTaskProps) {

    function onCheckIsDone() {
        const updatedTask: TTask = {
            ...task,
            isDone: !task.isDone
        }
        setTasks(prevState => (
            prevState.map(item => (
                item.id === task.id
                    ? updatedTask
                    : item
            ))
        ))
    }

    function onRemove() {
        setTasks(prevState => prevState.filter(item => item.id !== task.id))
    }

    function handleConfirmRemoveTask() {
        Alert.alert('Confirmação', 'Deseja remover a tarefa?', [
            {
                text: 'Sim',
                onPress: onRemove
            },
            {
                text: 'Não'
            }
        ])
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerItem}>
                <TouchableOpacity
                    onPress={onCheckIsDone}
                    style={styles.containerTextItem}
                >
                    {task.isDone ? (
                        <View style={styles.iconChecked}>
                            <Image
                                source={require('../../../../assets/check.png')}
                                resizeMode='contain'
                            />
                        </View>
                    ) : (
                        <View style={styles.iconWithoutCheck} />
                    )}
                    <Text style={task.isDone ? styles.textItemDone : styles.textItem}>
                        {task.description}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleConfirmRemoveTask}
                >
                    <Image
                        resizeMode="cover"
                        style={styles.iconTrash}
                        source={require('../../../../assets/trash.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}