import React from 'react'
import FeIcon from 'react-native-vector-icons/Feather'
import OcCon from 'react-native-vector-icons/Octicons'

FeIcon.loadFont()
OcCon.loadFont()

type IconSizeProps = {
  iconSizes: keyof typeof IconSizes;
}

export interface IconProps {
  size: IconSizeProps['iconSizes'];
  name: string;
  color: string;
}

export const IconSizes = {
  small: 15,
  medium: 25,
  large: 30,
  extraLarge: 40,
  ultraLarge: 70
}

export const FeatherIcon = ({size, name, color}: IconProps) => (
  <FeIcon name={name} size={IconSizes[size]} color={color} />
)

export const OcticonsIcon = ({size, name, color}: IconProps) => (
  <OcCon name={name} size={IconSizes[size]} color={color} />
)
