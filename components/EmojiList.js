import { useState } from "react";
import { FlatList, Image, Platform, Pressable, StyleSheet } from "react-native";

export default function EmojiList({ onSelect, onCloseModal }) {
    const [emoji] = useState([
        require('../assets/angry.png'),
        require('../assets/cool.png'),
        require('../assets/emoji.png'),
        require('../assets/money.png'),
        require('../assets/sad.png'),
        require('../assets/thinking.png')
    ]);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === "web"}
      data={emoji}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => {
        return (
          <Pressable
            onPress={() => {
              onSelect(item);
              onCloseModal();
            }}
          >
            <Image source={item} key={index} style={styles.image} />
          </Pressable>
        );
      }}
    ></FlatList>
  );
}

const styles = StyleSheet.create({
    listContainer: {
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      paddingHorizontal: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    image: {
      width: 80,
      height: 80,
      marginRight: 20,
    },
  });