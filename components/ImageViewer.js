import { Image, StyleSheet } from 'react-native'

export default function ImageViewer({ FonImage }) {
  return (
    <Image source={FonImage} />
  )
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18
    }
});
