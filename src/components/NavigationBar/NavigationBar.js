import React from "react"
import IconButtonSet from "../UI/IconButtonSet"

const navigationButtonList = [
  { label: "Cafes", icon: "coffee", value: "Cafes", link: "search/Cafes" },
  {
    label: "Restourants",
    icon: "food",
    value: "Restourants",
    link: "search/Restourants"
  },
  {
    label: "Art Galleries",
    icon: "picture",
    value: "Art Galleries",
    link: "search/Art Galleries"
  },
  {
    label: "Favourites",
    icon: "star",
    value: "Favourites",
    link: "favourites"
  }
]

const NavigationBar = () => (
  <IconButtonSet size="big" buttonList={navigationButtonList} />
)
export default NavigationBar
