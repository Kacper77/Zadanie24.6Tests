import Player from './Player';
import React from 'react';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow( < Player / > );
});

it('renders correct name', () => {
            const playerNamePassed = 'Ania';
            const playerComponent = shallow( < Player name = { playerNamePassed }
                />);

                const playerNameRendered = playerComponent.find('.Player__name').text();

                expect(playerNameRendered).toEqual(playerNamePassed);
            });