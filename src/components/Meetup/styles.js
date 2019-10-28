import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  border-radius: 4px;
  margin-bottom: 15px;
  overflow: hidden;
`;
export const Banner = styled.Image`
  width: 100%;
  height: 150px;
`;

export const BoxItems = styled.View`
  padding: 20px;
`;

export const Title = styled.Text`
  color: #333333;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 15px;
  text-transform: capitalize;
`;
export const Info = styled.View`
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
`;

export const InfoText = styled.Text`
  color: #999999;
  font-size: 13px;
  margin-left: 5px;
`;
export const ButtonAction = styled.TouchableOpacity`
  height: 40px;
  background: #f94d6a;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
`;
export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
