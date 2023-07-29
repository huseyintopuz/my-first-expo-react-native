import { Image, StyleSheet } from 'react-native';

export default function ImageViewer({ selectedImage, fonImage }) {
  const imageSource = selectedImage ? { uri: selectedImage } : fonImage
  return (
    <Image source={imageSource} style={styles.image} />
  )
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18
    }
});
