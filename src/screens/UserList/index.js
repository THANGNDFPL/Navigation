import { FlatList, Text, View } from "react-native";

export default function UserList(props) {
    const navigation = props.navigation;
    const data = [
        { id: 1, name: 'Thắng', age: 20, },
        { id: 2, name: 'Lộc', age: 19, },
        { id: 3, name: 'Thắng', age: 20, },
    ];
    return (
        
        <FlatList 
            data={data}
            renderItem={({item}) => (
                <View>
                        <Text>{item.id}</Text>
                        <Text>{item.name}</Text>
                        <Text>{item.age}</Text>
                    </View>
                )} 
                keyExtractor={(item) => item.id} />
    );
}