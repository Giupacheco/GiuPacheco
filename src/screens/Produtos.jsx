import { Button, Text, View, Image, Card } from "react-native";
import { Title } from "react-native-paper";
import { styles } from "../lib/styles";

export const Produtos = ({ navigation }) => (
  <View>
    <Image
      style={styles.imagem}
      source={{
        uri: "https://www.mojosavings.com/wp-content/uploads/2013/08/sephora.jpg",
      }}
    />
    <Text>
      <center>
        <b>
          <h1>Produtos</h1>
        </b>
      </center>
    </Text>
    <Text>
      <center>
        <b>Vendemos maquiagens de todas as marcas possíveis</b>
      </center>
      <br></br>
      <center>Rímel;</center>
      <center>Batom;</center>
      <center>Corretivo;</center>
      <center>Delineador;</center>
      <center>Base matte;</center>
      <center>Pó compacto;</center>
      <center>Contorno;</center>
      <center>Blush;</center>
    </Text>
  </View>
);
