import { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";

export default function Products(props) {

    const navigation = props.navigation;

    const [list, setList] = useState([]);

    useEffect(() => {
        fetch('http://10.0.2.2:3000/products')
            .then(res => res.json())
            .then(data => setList(data))
            .catch((error) => {
                console.log(error.message);
                throw error;
            });
    }, [list]);
    return (
        <View>
            
            <FlatList
                data={list}
                renderItem={({ item }) => (
                    <View>
                        <Text>ID: {item.id}</Text>
                        <Text>Name: {item.name}</Text>
                        <Text>Desc: {item.desc}</Text>
                        <Text>Price: {item.price}</Text>
                        <Text>Sale: {item.sale_price}</Text>
                        <Text>Status: {item.status}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    )

}