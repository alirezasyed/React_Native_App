import { createAppContainer, createStackNavigator } from 'react-navigation'
import Search from '../Components/Search'

const SearchStackNavigator = createStackNavigation({
    Search: {
        screen: Search,
        navigationOptions: {
            title: "Rechercher"
        }
    }
})

export default createAppContainer(SearchStackNavigator)