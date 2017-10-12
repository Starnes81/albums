import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image } = album;
  const { thumbnailStyle, headerContentStyle, thumbnailConatinerStyle, headerTextStyle, imageStyle } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailConatinerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{ title }</Text>
          <Text>{ artist }</Text>
        </View>
      </CardSection>
      <CardSection>
         <Image style={imageStyle} source={{ uri: image }} />
      </CardSection>
      <CardSection>
         <Button />
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
    thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailConatinerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginleft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
