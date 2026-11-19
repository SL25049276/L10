import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SectionList,
  ScrollView,
  Image,
  StyleSheet,
  Alert,
} from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

// Builds the card image URL from the card number
const cardUrl = (num) =>
    `https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_${num}-2x.png`;

const datasource = [
  {
    title: "Grass",
    icon: "leaf",
    iconColor: "#4CAF50",
    backgroundColor: "#E2EFDA",
    data: [
      { key: "Bulbasaur", image: cardUrl(1) },
      { key: "Ivysaur", image: cardUrl(2) },
    ],
  },
  {
    title: "Fire",
    icon: "fire",
    iconColor: "#E8590C",
    backgroundColor: "#FCE4D6",
    data: [
      { key: "Charmander", image: cardUrl(4) },
      { key: "Charmeleon", image: cardUrl(5) },
    ],
  },
  {
    title: "Water",
    icon: "droplet",
    iconColor: "#1E88E5",
    backgroundColor: "#DDEBF7",
    data: [
      { key: "Squirtle", image: cardUrl(7) },
      { key: "Wartortle", image: cardUrl(8) },
    ],
  },
  {
    title: "Electric",
    icon: "bolt",
    iconColor: "#F4B400",
    backgroundColor: "#FFF2CC",
    data: [
      { key: "Pikachu", image: cardUrl(25) },
      { key: "Raichu", image: cardUrl(26) },
    ],
  },
  {
    title: "Psychic",
    icon: "eye",
    iconColor: "#9C27B0",
    backgroundColor: "#E8D9F0",
    data: [
      { key: "Abra", image: cardUrl(63) },
      { key: "Kadabra", image: cardUrl(64) },
    ],
  },
  {
    title: "Fighting",
    icon: "hand-fist",
    iconColor: "#B5532E",
    backgroundColor: "#F4D9D0",
    data: [
      { key: "Mankey", image: cardUrl(56) },
      { key: "Primeape", image: cardUrl(57) },
    ],
  },
  {
    title: "Dark",
    icon: "moon",
    iconColor: "#37474F",
    backgroundColor: "#D9D9D9",
    data: [
      { key: "Ekans", image: cardUrl(23) },
      { key: "Arbok", image: cardUrl(24) },
    ],
  },
  {
    title: "Dragon",
    icon: "dragon",
    iconColor: "#B8860B",
    backgroundColor: "#F2E6C4",
    data: [
      { key: "Dratini", image: cardUrl(147) },
      { key: "Dragonair", image: cardUrl(148) },
    ],
  },
  {
    title: "Normal",
    icon: "star",
    iconColor: "#8D8D8D",
    backgroundColor: "#F2F2F2",
    data: [
      { key: "Pidgey", image: cardUrl(16) },
      { key: "Pidgeotto", image: cardUrl(17) },
    ],
  },
];

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginHorizontal: 12,
    marginBottom: 20,
  },
  titleStyle: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
    color: "#2F3A56",
  },
  buttonStyle: {
    backgroundColor: "#4472C4",
    paddingVertical: 14,
    marginBottom: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  headerStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 14,
    marginBottom: 10,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 2,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 8,
  },
  opacityStyle: {
    borderWidth: 2,
    marginBottom: 10,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 14,
  },
  textStyle: {
    fontSize: 19,
    marginLeft: 8,
    fontWeight: "bold",
    flex: 1,
  },
  imageFrame: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 4,
  },
  imageStyle: {
    width: 110,
    height: 150,
  },
});

const renderItem = ({ item, section }) => (
    <TouchableOpacity
        style={[
          styles.opacityStyle,
          { backgroundColor: section.backgroundColor, borderColor: section.iconColor },
        ]}
        onPress={() => Alert.alert(item.key + " is selected")}
    >
      <Text style={[styles.textStyle, { color: section.iconColor }]}>{item.key}</Text>
      <View style={styles.imageFrame}>
        <Image source={{ uri: item.image }} style={styles.imageStyle} resizeMode="contain" />
      </View>
    </TouchableOpacity>
);

const App = () => (
    <ScrollView style={{ backgroundColor: "#FAFAFA" }}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>Pokemon Card Collection</Text>

        <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => Alert.alert("Add Pokemon", "Feature coming next lesson!")}
        >
          <Text style={styles.buttonText}>+ Add Pokemon</Text>
        </TouchableOpacity>

        <SectionList
            sections={datasource}
            renderItem={renderItem}
            keyExtractor={(item) => item.key}
            scrollEnabled={false}
            renderSectionHeader={({ section }) => (
                <View
                    style={[
                      styles.headerStyle,
                      { backgroundColor: section.backgroundColor, borderColor: section.iconColor },
                    ]}
                >
                  <FontAwesome6 name={section.icon} size={20} color={section.iconColor} />
                  <Text style={[styles.headerText, { color: section.iconColor }]}>
                    {section.title}
                  </Text>
                </View>
            )}
        />
      </View>
    </ScrollView>
);

export default App;