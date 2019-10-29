import React, { useEffect, useState, useMemo } from 'react';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { format, subDays, addDays, parse } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { utcToZonedTime } from 'date-fns-tz';
import api from '~/services/api';
import Background from '~/components/Background';

import { Container, Title, DateButton, DateLabel, List } from './styles';
import Header from '~/components/Header';
import Meetup from '~/components/Meetup';

function Dashboard({ isFocused }) {
  const [date, setDate] = useState(new Date());
  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  const [meetups, setMeetups] = useState([]);

  async function loadMeetups() {
    const response = await api.get('meetups', {
      params: { date },
    });
    setMeetups(response.data);
  }

  useEffect(() => {
    if (isFocused) {
      loadMeetups();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);

  async function handleSubscription(id) {
    const response = await api.post(`subscriptions/`, {
      meetup_id: id,
    });
    // console.tron.log(response);
    setMeetups(meetups.map(meetup => meetup.id !== id));
  }

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  return (
    <Background>
      <Header />
      <Container>
        <Title>
          <DateButton onPress={() => handlePrevDay()}>
            <Icon name="chevron-left" size={36} color="#fff" />
          </DateButton>
          <DateLabel>{dateFormatted}</DateLabel>
          <DateButton onPress={() => handleNextDay()}>
            <Icon name="chevron-right" size={36} color="#fff" />
          </DateButton>
        </Title>

        <List
          data={meetups}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Meetup action={handleSubscription} data={item} />
          )}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="list" size={27} color={tintColor} />
  ),
};

export default withNavigationFocus(Dashboard);
