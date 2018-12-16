import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from '../components/common/Card';
import CardSection from '../components/common/CardSection';
import Button from '../components/common/Button';
import PostDetail from './PostDetail';

const BuildingDetail = ({ building }) => {
  const { name, location, text, image, thumbnail, url } = building;
  const {
    thumbnailStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    headerContentStyle,
    captionStyle,
    imageStyle,
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image style={thumbnailStyle} source={{ uri: thumbnail }} />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{name}</Text>
          <Text>{location}</Text>
        </View>
      </CardSection>
      <Text style={captionStyle}>{text}</Text>
      <CardSection>
        <Image style={imageStyle} source={{ uri: image }} />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>View Details</Button>
        <Button onPress={() => Linking.openURL(url)}>Refer a Friend</Button>
      </CardSection>

      <CardSection>
        <PostDetail onPress={() => Linking.openURL(url)}>Likes</PostDetail>
        <PostDetail onPress={() => Linking.openURL(url)}>Comments</PostDetail>
        <PostDetail onPress={() => Linking.openURL(url)}>Referrals</PostDetail>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 18,
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  captionStyle: {
    marginTop: 10,
    marginLeft: 10,
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  },
};

export default BuildingDetail;
