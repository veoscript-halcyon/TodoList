import React from 'react'
import tw from 'twrnc'
import { fonts } from '../styles/global'
import { FeatherIcon } from '../config/Icons'
import { View, Text, TextInput, TouchableOpacity, Modal } from 'react-native'
import { CREATE_TODOS_REQUEST, SET_TODO_CONTENT, SET_TODO_TITLE } from '../redux/todos/action-types'
import { connect } from 'react-redux'

interface AddTodoModalPropsTypes {
  todos: any
  dispatch: any
  refresh: any
  modalVisible: boolean
  handleCloseAddTodoModal: any
}

class AddTodoModal extends React.PureComponent<AddTodoModalPropsTypes> {

  constructor(props: AddTodoModalPropsTypes) {
    super(props)
    this.state = {}
  }

  handleCreateTodo = async () => {
    const { todos, dispatch, refresh, handleCloseAddTodoModal } = this.props
    const { title, content } = todos

    await dispatch({
      type: CREATE_TODOS_REQUEST,
      payload: {
        title,
        content
      }
    })

    refresh()
    handleCloseAddTodoModal()
  }

  render() {

    const { dispatch } = this.props
    
    return (
      <Modal
        statusBarTranslucent={true}
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
              <View style={tw`flex-col items-center w-full my-3`}>
                <View style={tw`flex-col w-full`}>
                  <Text style={[tw`text-sm text-neutral-500 ml-2 mb-2`, fonts.fontRaleway]}>Title</Text>
                  <TextInput
                    style={[tw`px-3 py-2 w-full rounded-lg text-neutral-600 border border-orange-400`, fonts.fontRaleway]}
                    onChangeText={(text: string) => {
                      dispatch({
                        type: SET_TODO_TITLE,
                        payload: {
                          title: text
                        }
                      })
                    }}
                  />
                </View>
                <View style={tw`flex-col w-full my-2`}>
                  <Text style={[tw`text-sm text-neutral-500 ml-2 mb-2`, fonts.fontRaleway]}>Content</Text>
                  <TextInput
                    multiline={true}
                    numberOfLines={1}
                    style={[tw`flex-row items-start px-3 py-2 w-full rounded-lg text-neutral-600 border border-orange-400`, fonts.fontRaleway]}
                    onChangeText={(text: string) => {
                      dispatch({
                        type: SET_TODO_CONTENT,
                        payload: {
                          content: text
                        }
                      })
                    }}
                  />
                </View>
              </View>
              <View style={tw`flex-row items-center justify-center w-full`}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={tw`flex-row items-center justify-center w-[5rem] mr-1 px-3 py-3 rounded-lg bg-neutral-400`}
                  onPress={this.props.handleCloseAddTodoModal}
                >
                  <Text style={[tw`text-base text-white -mt-1`, fonts.fontRaleway]}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={tw`flex-row items-center justify-center w-[5rem] px-3 py-3 rounded-lg bg-orange-400`}
                  onPress={this.handleCreateTodo}
                >
                  <Text style={[tw`text-base text-white -mt-1`, fonts.fontRaleway]}>Save</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    )
  }
}

const mapStateToProps = (state: any) => ({
  todos: state.todosReducer
})

export default connect(mapStateToProps)(AddTodoModal)