import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings128045Navigator from '../features/Settings128045/navigator';
import Settings128028Navigator from '../features/Settings128028/navigator';
import BlankScreen0128009Navigator from '../features/BlankScreen0128009/navigator';
import ArticleList127992Navigator from '../features/ArticleList127992/navigator';
import ArticleList127991Navigator from '../features/ArticleList127991/navigator';
import ArticleList127990Navigator from '../features/ArticleList127990/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings128045: { screen: Settings128045Navigator },
Settings128028: { screen: Settings128028Navigator },
BlankScreen0128009: { screen: BlankScreen0128009Navigator },
ArticleList127992: { screen: ArticleList127992Navigator },
ArticleList127991: { screen: ArticleList127991Navigator },
ArticleList127990: { screen: ArticleList127990Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
