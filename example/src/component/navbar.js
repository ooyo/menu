import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const CustomTopNavBar = () => {
  const leftArrowIconUrl = 'https://cdn-icons-png.flaticon.com/512/109/109618.png';
  const profileUrl = 'https://i.pinimg.com/564x/3e/fd/7b/3efd7b3dbe7dbc36b0cd692d21665202.jpg';

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', padding: 10, height:64, backgroundColor: '#181818' }}>
      <TouchableOpacity onPress={() => console.log('Left button pressed')}>
        <Text style={{ color: 'white', fontSize: 16 }}>  <Image source={{ uri: leftArrowIconUrl }} style={{ width: 20, height: 20, tintColor: 'white' }} />
</Text>
      </TouchableOpacity>
      
      <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Justin Bieber</Text>
      
      <TouchableOpacity onPress={() => console.log('Right button pressed')}> 
        <Image source={{ uri: profileUrl }} style={{ width: 30, height: 30, borderRadius: 15, tintColor: '#181818' }} />
      </TouchableOpacity>
    </View>
  );
};

export default CustomTopNavBar;