import { SwipeGesture } from "@/components/SwipeGesture";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Alert, Button, FlatList, StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

const AlertButton = styled.TouchableOpacity`
	background-color: pink;
	padding: 16px 32px;
	border-radius: 16px;
`;

const Container = styled.View`
	flex: 1;
	background-color: #fff;
	align-items: center;
	justify-content: center;
	gap: 8px;
`;

const example = [1, 3, 4, 2, 14, 15];

export default function App() {
	const [count, setCount] = useState<number>(0);

	useEffect(() => {
		if (count % 5 == 0 && count != 0) Alert.alert("Button with adjusted color pressed");
	}, [count]);

	return (
		<Container>
			{example.map((item, i) => {
				return <Text key={i}>{item}</Text>;
			})}
			<Text>Open up App.tsx to start working on your app!</Text>
			<Text>count: {count}</Text>

			<AlertButton onPress={() => setCount((p) => p + 1)}>
				<Text>testing 123</Text>
			</AlertButton>

			<SwipeGesture />

			<StatusBar style="auto" />
		</Container>
	);
}
