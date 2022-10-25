import * as React from 'react';
import { StyleSheet, Text, View, Image, Button, FlatList, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { fetchedResponse, clearResponse } from '../redux/actions/index'


const renderItems = ({ item }) => (
  <View >
    <Text style={{ color: 'white', fontWeight: 'bold', alignSelf: 'center' }}>
      {item}, {" "}
    </Text>
  </View>
);



const HsApp = ({ bagOfInfo, fetchedResponse, clearResponse }) => {

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '714175ce39mshc175e3a1c1dd1f3p161e71jsndd6a5ded4afe',
      'X-RapidAPI-Hot': 'omgvamp-hearthstone-v1.p.rapidapi.com'
    }
  };

  const dataFetch = () => {
    fetch('https://omgvamp-hearthstone-v1.p.rapidapi.com/info', options)
      .then(response => response.json())
      .then(response => {
        fetchedResponse(response)
        console.log("Response has been recieved")
      })
      .catch(err => console.error(err));
  }



  return (

 
    <View style={styles.container}>

      <Image style={{ width: 375, height: 250 }} resizeMode={'center'} source={{ uri: 'https://i.pinimg.com/originals/e6/7e/de/e67ede821c5f61dc1d6bdfe9d6c21206.jpg' }} />

      <Text style={styles.title}>Welcome to my HearthStone app!</Text>
      <View style={styles.credits}>
        <Text style={styles.credittext}>API provided by omgvamp via RapidAPI </Text>
        <Text style={styles.credittext}>App developed by Anthony Elia </Text>
      </View>

      <View style={styles.buttonforfetch}>
        <Button onPress={() => dataFetch()} title="Fetch Game Data" color="#e6ac00" />
      </View>


      <View style={styles.sectionscontainer}>
        <ScrollView style={{ height: '100%', width: '100%' }} horizontal={true}>

          <ScrollView style={{ height: '100%', width: '100%' }}>
            <View style={styles.sections}>
              <Text style={styles.subheader}>Classes</Text>
              <Image style={styles.imageheader} resizeMode={'center'} source={{ uri: 'https://preview.redd.it/lg3tmyg6q0b81.jpg?width=640&crop=smart&auto=webp&s=9f4be234f09ed623326afb04dc5e1e615358e496' }} />
              <FlatList data={bagOfInfo.classes} renderItem={renderItems} />
            </View>
          </ScrollView>

          <ScrollView style={{ height: '100%', width: '100%' }}>
          <View style={styles.sections}>
              <Text style={styles.subheader}>Sets</Text>
              <Image style={styles.imageheader} resizeMode={'center'} source={{ uri: 'https://images.blz-contentstack.com/v3/assets/bltc965041283bac56c/blt0244d23dc23be333/62a9fd9657e9c21147b72f61/HS_24_logo_enUS.png' }} />
              <ScrollView style={{height:225, width:'100%'}}>
              <FlatList data={bagOfInfo.sets} renderItem={renderItems} />
              </ScrollView>
            </View>
          </ScrollView>

          <ScrollView style={{ height: '100%', width: '100%' }}>
          <View style={styles.sections}>
              <Text style={styles.subheader}>Types</Text>
              <Image style={styles.imageheader} resizeMode={'center'} source={{ uri: 'https://bnetcmsus-a.akamaihd.net/cms/page_media/EEIH17JPLOTH1527296496242.jpg' }} />
              <FlatList data={bagOfInfo.types} renderItem={renderItems} />
            </View>
          </ScrollView>

          <ScrollView style={{ height: '100%', width: '100%' }}>
          <View style={styles.sections}>
              <Text style={styles.subheader}>Factions</Text>
              <Image style={styles.imageheader} resizeMode={'center'} source={{ uri: 'https://cdn.esports.gg/wp-content/uploads/2022/02/01024251/AllianceandHorde.jpg' }} />
              <FlatList data={bagOfInfo.factions} renderItem={renderItems} />
            </View>
          </ScrollView>

          <ScrollView style={{ height: '100%', width: '100%' }}>
          <View style={styles.sections}>
              <Text style={styles.subheader}>Rarity</Text>
              <Image style={styles.imageheader} resizeMode={'center'} source={{ uri: 'https://mzy11mzy.github.io/hearthstone/img/dust.png' }} />
              <FlatList data={bagOfInfo.qualities} renderItem={renderItems} />
            </View>
          </ScrollView>

          <ScrollView style={{ height: '100%', width: '100%' }}>
          <View style={styles.sections}>
              <Text style={styles.subheader}>Races</Text>
              <Image style={styles.imageheader} resizeMode={'center'} source={{ uri: 'https://d1lss44hh2trtw.cloudfront.net/assets/editorial/2019/06/siegebreaker.jpg' }} />
              <FlatList data={bagOfInfo.races} renderItem={renderItems} />
            </View>
          </ScrollView>

        </ScrollView>
      </View>

      <View style={{ paddingBottom: 50 }}>
        <Button onPress={() => clearResponse()} title="Clear data" color="#e6ac00" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#313131',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    color: 'gold',
    fontSize: 32,
    paddingBottom: 5,
    alignSelf: 'center'

  },
  credits: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10
  },
  credittext: {
    fontStyle: 'italic',
    color: 'white',
    fontSize: 20,
  },
  subheader: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'gold',
    fontSize: 20,
    marginTop: 10,
    alignSelf: 'center'
  },
  buttonforfetch: {
    paddingTop: 30
  },
  sectionscontainer: {
    flex: 1,
    width: 325,
    height: 325,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sections: {
    marginHorizontal:5
  },
  imageheader: {
    width: 375,
    height: 250,
    alignSelf: "center"
  }

});


const mapStateToProps = (state) => ({
  bagOfInfo: state.info
})

const mapDispatchToProps = { fetchedResponse, clearResponse }

export default connect(mapStateToProps, mapDispatchToProps)(HsApp)