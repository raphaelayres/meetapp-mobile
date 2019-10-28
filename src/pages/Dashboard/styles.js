import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;
export const Title = styled.View`
  font-size: 20px;
  color: #fff;
  align-self: center;
  margin: 30px 0;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
`;

export const DateButton = styled.TouchableOpacity`
  color: #fff;
`;
export const DateLabel = styled.Text`
  font-size: 20px;
  color: #fff;
  margin: 0 5px;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: { paddingLeft: 15, paddingRight: 15 },
  showVerticalScrollIndicator: false,
})``;
