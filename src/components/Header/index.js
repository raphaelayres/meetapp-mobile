import React from 'react';

import { StatusBar } from 'react-native';
import { Container, Logo } from './styles';

import logo from '~/assets/logo.png';

export default function Header() {
  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#18161F" />
      <Logo source={logo} />
    </Container>
  );
}
