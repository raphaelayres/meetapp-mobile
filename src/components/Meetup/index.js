import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import pt from 'date-fns/locale/pt';

import { format, parseISO } from 'date-fns';
import {
  Container,
  Banner,
  BoxItems,
  Title,
  Info,
  InfoText,
  ButtonAction,
  ButtonText,
} from './styles';

export default function Meetup({ data, action }) {
  const dateFormatted = format(
    parseISO(data.datetime),
    "d 'de' MMMM, 'às 'HH'h'",
    {
      locale: pt,
    }
  );

  return (
    <Container>
      <Banner source={{ uri: data.banner.path }} />
      <BoxItems>
        <Title>{data.title}</Title>
        <Info>
          <Ionicons name="md-calendar" size={14} color="#999999" />
          <InfoText>{dateFormatted}</InfoText>
        </Info>
        <Info>
          <MaterialCommunityIcons name="map-marker" size={14} color="#999999" />
          <InfoText>{data.localization}</InfoText>
        </Info>
        <Info>
          <MaterialIcons name="person" size={14} color="#999999" />
          <InfoText>
            Organizador:
            {data.organizer.name}
          </InfoText>
        </Info>
        <ButtonAction onPress={() => action(data.id)}>
          <ButtonText>Realizar inscrição</ButtonText>
        </ButtonAction>
      </BoxItems>
    </Container>
  );
}
