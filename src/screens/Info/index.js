import { useState, useEffect } from "react";
import { Button, Image, Text, View } from "react-native";
import logo from '../../../assets/avatar.jpg';


export default function Info(props) {
    const navigation = props.navigation;
    const route = props.route;
    const id = route.pagrams?.id || 0;

    const [name, setName] = useState('');
    const [rollNo, setRollNo] = useState('');
    const [count, setCount] = useState(0);

    useEffect(
        () => {
            setName('Nguyễn Văn A Effect');
            setRollNo('PH1234');
        },
        []
    )

    // useEffect(
    //     () => {
    //         setRollNo(name + ' PH1234 ');
    //     },
    //     [name]
    // )

    useEffect(() => {
        if (count == 2) {
            setName('Tên mới đang effect')
        }
    }, [count])

    const onUpdate = () => {
        setName('Nguyễn Văn A');
        setRollNo('PH1234');
    }
    return (
        <View>
            {id !== 0
                ? <Text> Giá trị nhận được trước đó {id} </Text>
                : <Text> Hệ thống gặp trục trặc</Text>
            }
            <Text>
                Họ tên: {name}
            </Text>
            <Text>
                Mã sinh viên: {rollNo}
            </Text>
            <Button title="Cập nhật GT" onPress={() => onUpdate()} />
            <Text>Giá trị đếm {count}</Text>
            <Button title="Tăng giá trị" onPress={() => {
                setCount(count + 1);
            }} />
        </View >
    );
}