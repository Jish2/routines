import React from "react";
import { SafeAreaView, StyleSheet, View, Text, StatusBar, FlatList } from "react-native";
import Swipeable, { SwipeableProps } from "react-native-gesture-handler/Swipeable";

const todoList = [
	{ id: "1", text: "Learn JavaScript" },
	{ id: "2", text: "Learn React" },
	{ id: "3", text: "Learn TypeScript" },
];

const onSwipeableOpen: SwipeableProps["onSwipeableOpen"] = (direction) => {
	alert(`Swipe from ${direction}`);
};

const Separator = () => <View style={styles.itemSeparator} />;

const LeftSwipeActions = () => {
	return (
		<View style={{ flex: 1, backgroundColor: "#ccffbd", justifyContent: "center" }}>
			<Text
				style={{
					color: "#40394a",
					// paddingHorizontal: 10,
					fontWeight: "600",
					paddingHorizontal: 30,
					paddingVertical: 20,
				}}
			>
				Bookmark
			</Text>
		</View>
	);
};
const rightSwipeActions = () => {
	return (
		<View
			style={{
				backgroundColor: "#ff8303",
				justifyContent: "center",
				alignItems: "flex-end",
			}}
		>
			<Text
				style={{
					color: "#1b1a17",
					// paddingHorizontal: 10,
					fontWeight: "600",
					paddingHorizontal: 30,
					paddingVertical: 20,
				}}
			>
				Delete
			</Text>
		</View>
	);
};

const ListItem = ({ text }: { text: string }) => (
	<Swipeable renderLeftActions={LeftSwipeActions} renderRightActions={rightSwipeActions} onSwipeableOpen={onSwipeableOpen}>
		<View
			style={{
				paddingHorizontal: 30,
				paddingVertical: 20,
				backgroundColor: "white",
			}}
		>
			<Text style={{ fontSize: 24 }}>{text}</Text>
		</View>
	</Swipeable>
);

export const SwipeGesture = () => {
	return (
		<>
			<SafeAreaView style={styles.container}>
				<Text style={{ textAlign: "center", marginVertical: 20 }}>Swipe right or left</Text>
				<FlatList
					data={todoList}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => <ListItem {...item} />}
					ItemSeparatorComponent={() => <Separator />}
				/>
			</SafeAreaView>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		border: "solid 1px red",
	},
	itemSeparator: {
		flex: 1,
		height: 1,
		backgroundColor: "#444",
	},
});
