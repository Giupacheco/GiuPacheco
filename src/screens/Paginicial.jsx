import { Button, Image, Text, View } from "react-native";
import { styles } from "../lib/styles";

export const Paginicial = ({ navigation }) => (
    <View>
        <Image style={styles.imagem}source={{ uri:
            'https://www.mojosavings.com/wp-content/uploads/2013/08/sephora.jpg'}} />
        <Text><center><h1>Bem Vindo a Sephora!!</h1></center></Text>
        <Text><center><h2>Reach out and gift</h2></center></Text>
    
    </View>
)

