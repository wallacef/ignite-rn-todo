import { useMemo, useState } from 'react'
import {
    FlatList,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import { Empty } from '../Empty';
import { ItemTask } from "../Item";
import { styles } from "./styles";

export function TaskList() {
    const [taskName, setTaskName] = useState('')
    const [tasks, setTasks] = useState<TTask[]>([])

    function generateId() {
        return new Date().getTime()
    }

    function onAddTask() {
        const data: TTask = {
            id: generateId(),
            description: taskName,
            isDone: false
        }
        setTasks(prevState => [...prevState, data])
        setTaskName('')
    }

    const countTaskDone = useMemo(() => (
        tasks.filter(item => item.isDone).length
    ), [tasks])

    return (
        <>
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                        value={taskName}
                        onChangeText={text => setTaskName(text)}
                        placeholder="Adicione uma nova tarefa"
                        placeholderTextColor='#808080'
                    />
                    <TouchableOpacity
                        style={styles.buttonAdd}
                        disabled={!taskName}
                        onPress={onAddTask}
                    >
                        <Image
                            source={require('../../../../assets/plus.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.infoTask}>
                    <View style={styles.infoGroupTask}>
                        <Text style={styles.infoCreatedTaskText}>Criadas</Text>
                        <Text style={styles.textCountTask}>{tasks.length}</Text>
                    </View>
                    <View style={styles.infoGroupTask}>
                        <Text style={styles.infoDoneTaskText}>Concluídas</Text>
                        <Text style={styles.textCountTask}>{countTaskDone}</Text>
                    </View>
                </View>
                {!tasks.length && (
                    <Empty />
                )}
                <FlatList
                    data={tasks}
                    renderItem={({ item }) => (
                        <ItemTask
                            setTasks={setTasks}
                            key={item.id}
                            task={item}
                        />
                    )}
                />
            </View>
        </>
    )
}