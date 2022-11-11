import React from 'react'
import AddTodoModal from '../component/AddTodoModal'
import tw from 'twrnc'
import { fonts } from '../styles/global'
import { FeatherIcon } from '../config/Icons'
import { connect } from 'react-redux'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'

interface HomeStateTypes {
  modalVisible: boolean
}

export class Home extends React.PureComponent<any, HomeStateTypes> {

  constructor(props: any) {
    super(props)
    this.state = {
      modalVisible: false
    }
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

  render() {
    return (
      <SafeAreaView style={tw`relative flex-1 flex-col items-center justify-start w-full h-full px-3 py-5 bg-[#f1ffbc]`}>
        <View style={tw`flex-col items-center w-full`}>
          <Text style={[tw`text-2xl text-neutral-500`, fonts.fontRalewayBold]}>Todo App</Text>
          <Text style={[tw`text-lg text-neutral-500`, fonts.fontRalewayLight]}>React Native + Redux</Text>
        </View>
        <View style={tw`flex-col items-center w-full my-10`}>
          <View style={tw`flex-col items-start w-full p-3 border-2 border-orange-400 rounded-xl bg-[#f7ffaf]`}>
            <View style={tw`flex-col w-full`}>
              <Text style={[tw`text-xl text-neutral-600 uppercase`, fonts.fontRalewayBold]}>Title</Text>
            </View>
            <View style={tw`flex-col w-full my-5`}>
              <Text style={[tw`text-base text-neutral-600 uppercase`, fonts.fontRaleway]}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit quod odit iusto, eveniet ipsam, nisi soluta earum nam perspiciatis voluptas dicta quas veniam totam ipsa reiciendis, accusantium architecto molestiae. Facilis.
              </Text>
            </View>
            <View style={tw`flex-col w-full`}>
              <Text style={[tw`text-sm text-[#8a8b41] uppercase`, fonts.fontRaleway]}>January 10, 2022</Text>
            </View>
          </View>
        </View>
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
          modalVisible={this.state.modalVisible}
          handleCloseAddTodoModal={this.handleCloseAddTodoModal}
        />
      </SafeAreaView>
    )
  }
}

const mapStateToProps = (state: any) => ({

})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Home)