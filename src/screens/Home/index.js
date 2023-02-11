import { View, Pressable, Text } from "react-native";

export default function Home(props) {
    const navigation = props.navigation;

    const changeScreen = (screen) => {
        navigation.navigate(screen,{id:134});
    }
    return (
        <View>
            <Text>Chào mừng đến với ứng dụng</Text>
            <Pressable onPress={() => changeScreen('Info')}>
                <Text>Vào trang thông tin</Text>
            </Pressable>
            <Pressable onPress={() => changeScreen('UserList')}>
                <Text>Vào trang Danh sách</Text>
            </Pressable>
            <Pressable onPress={() => changeScreen('Products')}>
                <Text>Vào trang Products</Text>
            </Pressable>
        </View>
    );
}