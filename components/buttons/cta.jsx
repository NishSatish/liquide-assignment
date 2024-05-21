// RESUABLE BUTTON

import { Text, TouchableOpacity, View } from "react-native"
import ctaStyle from "./ctaStyle"
import { useFonts } from "expo-font"

export const CTAButton = ({ children, navTo, nav, checkout }) => {
  const [fonts] = useFonts({
    'Roboto-R': require('../../assets/fonts/Roboto-Regular.ttf')
  });

  if (!fonts) {
    return <Text>Fonts not loaded</Text>
  }
  const clickHandler = () => {
    if(checkout) {
      // If CTA is used as a checkout button
      checkout();
    }
    nav.navigate(navTo);
  }
  return (
    <TouchableOpacity style={ctaStyle.bg} onPress={clickHandler}>
      <Text style={ctaStyle.btnText}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}