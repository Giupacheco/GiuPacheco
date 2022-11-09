import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Paginicial } from "../screens/Paginicial";

import { Produtos } from "../screens/Produtos";
import { Contato } from "../screens/Contato";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Sobre } from "../screens/sobre";
import { Login } from "../screens/Contato";

//const Stack = createNativeStackNavigator();
const MBNav = createMaterialBottomTabNavigator();

export const GPRootNavigation = () => {
  return (
    <MBNav.Navigator activeColor="#AC2F45" inactiveColor="#E68292" barStyle={{ backgroundColor: "black"}}>
      <MBNav.Screen
        name="Página Inicial"
        component={Paginicial}
        options={{
          tabBarLabel: "Página Inicial",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <MBNav.Screen
        name="Sobre"
        component={Sobre}
        options={{
          tabBarLabel: "Sobre",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <MBNav.Screen
        name="Produtos"
        component={Produtos}
        options={{
          tabBarLabel: "Produtos",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cart" color={color} size={26} />
          ),
        }}
      />
      <MBNav.Screen
        name="Contato"
        component={Login}
        options={{
          tabBarLabel: "Contato",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="phone" color={color} size={26} />
          ),
        }}
      />
     
    </MBNav.Navigator>
  );
};
