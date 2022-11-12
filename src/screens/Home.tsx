import React from 'react'
import AddTodoModal from '../component/AddTodoModal'
import TodoCard from '../component/TodoCard'
import tw from 'twrnc'
import { fonts } from '../styles/global'
import { FeatherIcon } from '../config/Icons'
import { SafeAreaView, View, Text, TouchableOpacity, FlatList, RefreshControl } from 'react-native'
import { connect } from 'react-redux'
import { GET_TODOS_REQUEST } from '../redux/todos/action-types'

interface HomePropsTypes {
  todos: any
  isLoading: boolean
  dispatch: any
}

interface HomeStateTypes {
  refresh: boolean
  modalVisible: boolean
}

class Home extends React.Component<HomePropsTypes, HomeStateTypes> {

  constructor(props: HomePropsTypes) {
    super(props)
    this.state = {
      refresh: false,
      modalVisible: false
    }
  }

  componentDidMount(): void {
    this.refresh()
  }

  refresh = async () => {
    const { dispatch } = this.props

    this.setState({
      refresh: true
    })

    await dispatch({ type: GET_TODOS_REQUEST })
    
    this.setState({
      refresh: false
    })
  }

  handleOpenAddTodoModal = () => {
    this.setState({
      modalVisible: true
    })
  }

  handleCloseAddTodoModal = () => {
    this.setState({
      modalVisible: false
    })
  }

  renderHeader = () => {
    return (
      <View style={tw`flex-col items-center w-full mb-5`}>
        <Text style={[tw`text-2xl text-neutral-500`, fonts.fontRalewayBold]}>Todo App</Text>
        <Text style={[tw`text-lg text-neutral-500`, fonts.fontRalewayLight]}>React Native + Redux Saga</Text>
      </View>
    )
  }

  renderItem = (items: any) => {
    return (
      <TodoCard
        title={items.item.title}
        content={items.item.content}
        created={items.item.created}
      />
    )
  }

  render() {

    const { todos, isLoading } = this.props

    return (
      <SafeAreaView style={tw`relative flex-1 flex-col items-center justify-start w-full h-full px-3 py-5 bg-[#f1ffbc]`}>
        {isLoading && (
          <View style={tw`flex-1 flex-col items-center justify-center w-full`}>
            <Text style={[tw`text-2xl text-orange-400`, fonts.fontRalewayBold]}>Loading...</Text>
          </View>
        )}
        {!isLoading && (
          <View style={tw`flex-1 flex-col w-full`}>
            <FlatList
              data={todos}
              renderItem={this.renderItem}
              ListHeaderComponent={this.renderHeader}
              refreshControl={
                <RefreshControl
                  colors={["#F07713", "#F7FFaF"]}
                  refreshing={this.state.refresh}
                  onRefresh={this.refresh}
                />
              }
            />
          </View>
        )}
        <View style={tw`absolute bottom-15 right-5 z-20`}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={tw`p-3 rounded-full shadow-lg bg-orange-400`}
            onPress={this.handleOpenAddTodoModal}
          >
            <FeatherIcon
              name="plus"
              size="large"
              color="#FFFFFF"
            />
          </TouchableOpacity>
        </View>
        <AddTodoModal
          refresh={this.refresh}
          modalVisible={this.state.modalVisible}
          handleCloseAddTodoModal={this.handleCloseAddTodoModal}
        />
      </SafeAreaView>
    )
  }
}

const mapStateToProps = (state: any) => ({
  todos: state.todosReducer.todos,
  isLoading: state.todosReducer.isLoading
})

export default connect(mapStateToProps)(Home)