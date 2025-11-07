import { Link } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";


export function sumIntegers(a, b) {
  return Number(a) + Number(b);
}

const Addition = () => {

    const [firstInteger, setFirstInteger] = useState('');
    const [secondInteger, setSecondInteger] = useState('');
    const [result, setResult] = useState(null);

    const handleSum = () => {
        const sum = sumIntegers(firstInteger, secondInteger)
        console.log(sum)
        setResult(sum)
    }


    return (
        <View style={styles.container}>
             <Link href="/" style={styles.title}>GO BACK TO HOME</Link>

             <Text style={styles.title}>Sum Two Numbers</Text>

             <TextInput
                placeholder="Please enter a number"
                keyboardType="numeric"
                value={firstInteger}
                onChangeText={setFirstInteger}
                style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
             />
             <TextInput
                placeholder="Please enter a second number"
                keyboardType="numeric"
                value={secondInteger}
                onChangeText={setSecondInteger}
                style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
             />

             <Button title="Calculate Sum" onPress={handleSum} />

            {result !== null && (
                <Text style={styles.result}>Result: {result}</Text>
            )}
                        
            

        </View>
    )
}

export default Addition;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    width: '80%',
    borderRadius: 5,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: '500',
  },
});