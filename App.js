import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import Camara from "./screens/Camara";
import DatosQR from "./screens/DatosQR";
import DatosManuales from "./screens/DatosManuales"; // ✅ Importar la nueva pantalla
import AllDataTable from "./screens/AllDataTable"; // ✅ Importar la nueva pantalla
import ParaDevolverTabla from "./screens/ParaDevolverTabla";
import { DataProvider } from "./screens/DataContext"; // ✅ Importar el contexto
import ManualScreen from "./screens/PantallaManual"; // ✅ Importar el archivo HTML

const Stack = createStackNavigator();

export default function App() {
  return (
    <DataProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Camara" component={Camara} />
          <Stack.Screen name="DatosQR" component={DatosQR} />
          <Stack.Screen name="DatosManuales" component={DatosManuales} />
          <Stack.Screen name="AllDataTable" component={AllDataTable} />
          <Stack.Screen
            name="ParaDevolverTabla"
            component={ParaDevolverTabla}
          />
          <Stack.Screen name="ManualU" component={ManualScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
}
