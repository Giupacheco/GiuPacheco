import { Text, View, Image  } from "react-native";
import { styles } from "../lib/styles";

export const Sobre = () => (
  <View>
    <Image
      style={styles.imagem}
      source={{ uri: "https://www.mojosavings.com/wp-content/uploads/2013/08/sephora.jpg" }}
    />
    <Text>
      <center>
        <h1>Sobre Nós</h1>
      </center>
    </Text>
    <Text>
      <center>
        A Sephora oferece uma infinita variedade de produtos de beleza das
        melhores e mais desejadas marcas do mundo. Todos os produtos
        comercializados em nosso website são garantidos oficialmente pelas
        empresas distribuidoras das marcas no Brasil. Além disso, apresentam o
        selo de garantia do distribuidor, o que garante a sua qualidade e
        procedência.
      </center>
    </Text>
  </View>
);
