import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
//import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Paginicial } from "../screens/Paginicial";

import { Produtos } from "../screens/Produtos";
import { Noticias } from "../screens/Noticias";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Sobre } from "../screens/sobre";

//const Stack = createNativeStackNavigator();
const MBNav = createMaterialBottomTabNavigator();

export const GPRootNavigation = () => {
  return (
    <MBNav.Navigator activeColor="#fff" inactiveColor="rgba(255,255,255,0.5)">
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
            <MaterialCommunityIcons name="phone" color={color} size={26} />
          ),
        }}
      />
      <MBNav.Screen
        name="Notícias"
        component={Noticias}
        options={{
          tabBarLabel: "Notícias",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="android" color={color} size={26} />
          ),
        }}
      />
     
    </MBNav.Navigator>
  );
};
