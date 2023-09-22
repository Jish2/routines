import { GestureHandlerRootView } from "react-native-gesture-handler";
import App from "@/app";

export default function Layout() {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<App />
		</GestureHandlerRootView>
	);
}
