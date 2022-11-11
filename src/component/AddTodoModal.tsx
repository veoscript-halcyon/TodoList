import React from 'react'
import tw from 'twrnc'
import { fonts } from '../styles/global'
import { FeatherIcon } from '../config/Icons'
import { View, Text, TextInput, TouchableOpacity, Modal } from 'react-native'

interface AddTodoModalPropsTypes {
  modalVisible: boolean
  handleCloseAddTodoModal: any
}

class AddTodoModal extends React.PureComponent<AddTodoModalPropsTypes, any> {

  constructor(props: AddTodoModalPropsTypes) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.props.modalVisible}
        onRequestClose={this.props.handleCloseAddTodoModal}   
      >
        <TouchableOpacity
          style={tw`absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50`}
          onPress={this.props.handleCloseAddTodoModal}
        />
        <View style={tw`flex-1 flex-col items-center justify-center w-full h-full px-5`}>
          <View style={tw`relative z-50 flex-col w-full p-3 rounded-xl bg-[#f1ffbc]`}>
            <View style={tw`flex-col w-full`}>
              <View style={tw`flex-row items-center justify-between w-full`}>
                <Text style={[tw`text-lg text-neutral-500 ml-2 mb-2`, fonts.fontRalewaySemiBold]}>Add Todo</Text>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={tw`p-1 rounded-full shadow-lg bg-orange-400`}
                  onPress={this.props.handleCloseAddTodoModal}
                >
                  <FeatherIcon
                    name="x"
                    size="small"
                    color="#FFFFFF"
                  />
                </TouchableOpacity>
              </View>
              <View style={tw`flex-col w-full my-5`}>
                <Text style={[tw`text-sm text-neutral-500 ml-2 mb-2`, fonts.fontRaleway]}>Title</Text>
                <TextInput
                  style={[tw`px-3 py-1 w-full rounded-lg text-neutral-500 bg-white`, fonts.fontRaleway]}
                />
              </View>
              <View style={tw`flex-row items-center justify-center w-full`}>
                <Text>Gago</Text>
                <Text>Gago</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    )
  }
}

export default AddTodoModal