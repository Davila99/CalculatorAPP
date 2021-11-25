import React,{useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ListKeys = () => {

    const [Usuarios, setUsuarios] = useState([
        {
            "data": [
              {
                "id": 1,
                "user_id": 1,
                "tweet_text": "Eliseo Davila Ojeda",
                "tweet_date": "2021-11-25T02:35:55.412107"
              },
              {
                "id": 2,
                "user_id": 1,
                "tweet_text": "Llego tu hora React",
                "tweet_date": "2021-11-25T02:36:14.151480"
              },
              {
                "id": 3,
                "user_id": 1,
                "tweet_text": "Llego tu hora React",
                "tweet_date": "2021-11-25T02:37:35.874231"
              },
              {
                "id": 4,
                "user_id": 1,
                "tweet_text": "Fácil si sabes programar puedes programar cualquier onda",
                "tweet_date": "2021-11-25T02:37:45.013549"
              },
              {
                "id": 5,
                "user_id": 1,
                "tweet_text": "Nunca se te olvide, solo es encontrar y captar el enfoque de la programación",
                "tweet_date": "2021-11-25T02:37:59.167346"
              }
            ],
            "total": 5
          }
    ])

    const [Nombre, setNombre] = useState('')
    
    const [Edad, setEdad] = useState(0)

    const [Text, setText] = useState('')

    return (
        <View>
            <TexInput
            style={styles.input}

            onChangeText={setText}
            />

            <Text></Text>
        </View>
    )
}

export default ListKeys

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input:{
        border: 'black',
        borderWidth:2
    }
})
