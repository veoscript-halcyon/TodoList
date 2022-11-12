import React from 'react'
import moment from 'moment'
import tw from 'twrnc'
import { fonts } from '../styles/global'
import { FeatherIcon } from '../config/Icons'
import { View, Text, TouchableOpacity } from 'react-native'

interface TodoCardPropsTypes {
  title: string
  content: string
  created: string
}

class TodoCard extends React.PureComponent<TodoCardPropsTypes> {

  constructor(props: TodoCardPropsTypes) {
    super(props)
    this.state = {}
  }

  render() {

    const { title, content, created } = this.props

    return (
      <View style={tw`flex-col items-center w-full my-1`}>
        <View style={tw`flex-col items-start w-full p-3 border-2 border-orange-400 rounded-xl bg-[#f7ffaf]`}>
          <View style={tw`flex-row items-center justify-between w-full`}>
            <Text style={[tw`text-xl text-neutral-600 uppercase`, fonts.fontRalewayBold]}>{ title }</Text>
            <TouchableOpacity
              activeOpacity={0.7}
              style={tw`p-1 rounded-full shadow-lg bg-orange-400`}
              onPress={() => {
                console.log('You Pressed Delete Task')
              }}
            >
              <FeatherIcon
                name="x"
                size="small"
                color="#FFFFFF"
              />
            </TouchableOpacity>
          </View>
          <View style={tw`flex-col w-full my-5`}>
            <Text style={[tw`text-base text-neutral-600 uppercase`, fonts.fontRaleway]}>{ content }</Text>
          </View>
          <View style={tw`flex-col w-full`}>
            <Text style={[tw`text-xs text-[#8a8b41] uppercase`, fonts.fontRaleway]}>{ moment(created).fromNow() }</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default TodoCard
