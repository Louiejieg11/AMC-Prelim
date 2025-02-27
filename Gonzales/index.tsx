import React, {useState} from 'react';
import {Switch, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const App = () => {
  // const [isEnabled1, setIsEnabled1] = useState(false);
  // const [isEnabled2, setIsEnabled2] = useState(false);
  // const [isEnabled3, setIsEnabled3] = useState(false);
  // const [isEnabled4, setIsEnabled4] = useState(false);
  // const [isEnabled5, setIsEnabled5] = useState(false);
  // const [isEnabled6, setIsEnabled6] = useState(false);
  // const [isEnabled7, setIsEnabled7] = useState(false);

  const [dataArray, setDataArray] = useState({});

  const coffeePairs = [
    ['Mocha', 'Latte'],
    ['Espresso', "Cappuccino"],
    ['Americano', 'Macchiato'],
    ['Flat White', 'Affogato'],
    ['Irish Coffee', 'Ristretto'],
    ['Turkish Coffee', 'Café au Lait'],
    ['Cold Brew', 'Nitro Coffee']
  ]

const toggleSwitch = (choice1, choice2) => {
  setDataArray((prev)=> ({
    ...prev,
    [choice1]: !prev[choice1],
    [choice2]: prev[choice2],
  }));
};
const [switchStates, setSwitchStates] = useState(
  coffeePairs.map(() => false)
);


// const handleSubmit = () => {
//   const selected = Object.keys(dataArray).filter((key) => dataArray[key])

//   const message = selected.length > 0 
//   ? selected.map((index,value) => (
//     alert
//   ) 
//   )
// }
  return (


    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>

        <Text style={{fontSize: 22}}>Select Your Coffee</Text>
        {coffeePairs.map((item, index) => (
          <View style={styles.coffeeContainer} key={index}>
            <Text  style={{color: switchStates ? 'brown' : 'black' }}>{item[0]}</Text>
            <Switch
              onValueChange={() => setSwitchStates(previousState => !previousState)}
               value={switchStates[index]}/>
            <Text  style={{color: switchStates ? 'black' : 'brown' }}>{item[1]}</Text>
          </View>
        ))}




        {/* <View style={styles.coffeeContainer}>
        <Text style={{color: isEnabled1 ? 'brown' : 'black' }}>Mocha</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled1 ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setIsEnabled1(previousState => !previousState)}
          value={isEnabled1}
        />
        <Text style={{color: isEnabled1 ? 'black' : 'brown' }}>Latte</Text>
        </View>

    <View style={styles.coffeeContainer}>
        <Text style={{color: isEnabled2 ? 'brown' : 'black' }}>Espresso</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled2 ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setIsEnabled2(previousState => !previousState)}
          value={isEnabled2}
        />
        <Text style={{color: isEnabled2 ? 'black' : 'brown' }}>Cappucino</Text>
        </View>

        <View style={styles.coffeeContainer}>
        <Text style={{color: isEnabled3 ? 'brown' : 'black' }}>Americano</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled3 ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setIsEnabled3(previousState => !previousState)}
          value={isEnabled3}
        />
        <Text style={{color: isEnabled3 ? 'black' : 'brown' }}>Macchiato</Text>
        </View>

        <View style={styles.coffeeContainer}>
        <Text style={{color: isEnabled4 ? 'brown' : 'black' }}>Flat White</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled4 ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setIsEnabled4(previousState => !previousState)}
          value={isEnabled4}
        />
        <Text style={{color: isEnabled4 ? 'black' : 'brown' }}>Affogato</Text>
        </View>

        <View style={styles.coffeeContainer}>
        <Text style={{color: isEnabled5 ? 'brown' : 'black' }}>Irsih Coffee</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled5 ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setIsEnabled5(previousState => !previousState)}
          value={isEnabled5}
        />
        <Text style={{color: isEnabled5 ? 'black' : 'brown' }}>Ristretto</Text>
        </View>

        <View style={styles.coffeeContainer}>
        <Text style={{color: isEnabled6 ? 'brown' : 'black' }}>Turkish Coffee</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled6 ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setIsEnabled6(previousState => !previousState)}
          value={isEnabled6}
        />
        <Text style={{color: isEnabled6 ? 'black' : 'brown' }}>Café au Lait</Text>
        </View>

        
        <View style={styles.coffeeContainer}>
        <Text style={{color: isEnabled7 ? 'brown' : 'black' }}>Cold Brew</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled7 ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setIsEnabled7(previousState => !previousState)}
          value={isEnabled7}
        />
        <Text style={{color: isEnabled7 ? 'black' : 'brown' }}>Nitro Coffee</Text>
        </View> */}


        <TouchableOpacity style={styles.buttonStyle} >
        <MaterialCommunityIcons name="coffee" size={24} color="white"  />
          <Text style={{color: 'white', fontWeight: 900}}>Submit Choice</Text>
        </TouchableOpacity>

      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
    coffeeContainer:{
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:'row'
    },
    buttonStyle: {
      backgroundColor: 'brown',
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:'row',
      padding: 10, 
      borderRadius: 5
    }
});

export default App;