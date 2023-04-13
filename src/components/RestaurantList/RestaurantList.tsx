import { Component } from 'react';
import styled from 'styled-components';
import { Restaurant } from '../../types';
import { RestaurantItem } from '../RestaurantItem/RestaurantItem';

type Props = {
  restaurants: Restaurant[];
  onRestaurantClick: React.MouseEventHandler<HTMLLIElement>;
};

export class RestaurantList extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { restaurants, onRestaurantClick } = this.props;

    return (
      <RestaurantListWrapper>
        {restaurants.map((restaurant) => (
          <RestaurantItem
            restaurant={restaurant}
            onRestaurantClick={onRestaurantClick}
          ></RestaurantItem>
        ))}
      </RestaurantListWrapper>
    );
  }
}

const RestaurantListWrapper = styled.ul`
  display: flex;
  flex-direction: column;

  padding: 0 16px;
  margin: 16px 0;
`;
