import React from 'react'
import moment from 'moment'
import tw from 'twrnc'
import { fonts } from '../styles/global'
import { FeatherIcon } from '../config/Icons'
import { View, Text, TouchableOpacity } from 'react-native'
import { DELETE_TODOS_REQUEST } from '../redux/todos/action-types'
import { connect } from 'react-redux'

interface TodoCardPropsTypes {
  id: string
  title: string
  content: string
  created: string
  refresh: any
  dispatch: any
}

class TodoCard extends React.PureComponent<TodoCardPropsTypes> {

  constructor(props: TodoCardPropsTypes) {
    super(props)
    this.state = {}
  }

  handleDeleteTodo = async () => {
    const { id, dispatch, refresh } = this.props

    await dispatch({
      type: DELETE_TODOS_REQUEST,
      payload: {
        id
      }
    })

    refresh()
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
              style={tw`p-1 rounded-full shadow-lg bg-blue-500`}
              onPress={this.handleDeleteTodo}
            >
              <FeatherIcon
                name="check"
                size="small"
                color="#FFFFFF"
              />
            </TouchableOpacity>
          </View>
          <View style={tw`flex-col w-full my-5`}>
            <Text style={[tw`text-base text-neutral-600`, fonts.fontRaleway]}>{ content }</Text>
          </View>
          <View style={tw`flex-col w-full`}>
            <Text style={[tw`text-xs text-[#8a8b41]`, fonts.fontRaleway]}>{ moment(created).fromNow() }</Text>
          </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state: any) => ({})

export default connect(mapStateToProps)(TodoCard)
