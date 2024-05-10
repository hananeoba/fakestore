import React from "react";
import { StyleSheet, View, TextInput, Pressable } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const SearchBar = ({setSearch, onPress, search} ) => {
  return (
    <View style={styles.searchContainer}>
        <Pressable onPress={()=>onPress(search)}>
      <Icon name="search" size={20} color="#666" style={styles.searchIcon} />
        </Pressable>
      <TextInput
        onChangeText={(text) => {setSearch(text)}}
        placeholder="Search"
        style={styles.searchInput}
        placeholderTextColor="#999"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginTop: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
    color: "#333",
  },
});

export default SearchBar;
