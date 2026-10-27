import { Button } from "@react-navigation/elements";
import { useRouter } from "expo-router/build/exports";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  const router = useRouter();
  
  return (
    <Button onPress={() => router.push("/scanner")}>
      Open receipt scanner
    </Button>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
