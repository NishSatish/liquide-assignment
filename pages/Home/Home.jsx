import { Text, View } from "react-native";
import HomeStyle from "./HomeStyle";
import { useFonts } from "expo-font";
import { CTAButton } from "../../components/buttons/cta";

export const HomePage = ({ navigation }) => {
  const [loadedFonts] = useFonts({
    'Gilroy-EB': require('../../assets/fonts/Gilroy-ExtraBold.otf'),
    'Gilroy-L': require('../../assets/fonts/Roboto-Bold.ttf')
  });

  if (!loadedFonts) {
    return <Text>Hello</Text>
  }
  return (
    <View style={HomeStyle.bg}>
      <Text style={HomeStyle.heroHeading}>Liquide Shopping</Text>
      <CTAButton nav={navigation} navTo='PRODUCTS'>View Products</CTAButton>
    </View>
  );
}