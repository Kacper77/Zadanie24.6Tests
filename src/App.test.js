import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import PlayersList from "./components/PlayersList/PlayersList";
import AddPlayer from "./components/AddPlayer/AddPlayer";

it("renders without crashing", () => {
    shallow(<App />);
});

it("update player score", () => {
    const app = shallow(<App />),
        players = [{
                name: "Kunegunda",
                score: 5
            },
            {
                name: "Antoś",
                score: 0
            }
        ],
        onScoreUpdate = app.find("PlayersList").prop("onScoreUpdate");
    app.setState({ players });
    onScoreUpdate(0, 5);
    const playersAfterUpdate = app.state().players;
    expect(playersAfterUpdate[0].score).toEqual(10);
});

it("add player", () => {
    const app = shallow(<App />),
        onPlayerAdd = app.find(AddPlayer).prop("onPlayerAdd");
    onPlayerAdd("Ania");
    const players = app.state("players");
    expect(players.length).toEqual(3);
    expect(players[2].name).toEqual("Ania");
    expect(players[2].score).toEqual(0);
});

it('should delete player from state', () => {
    const appComponent = shallow(<App players={[]} />);

    const onPlayerRemove = appComponent.find(PlayersList).prop('onPlayerRemove');
    onPlayerRemove('Antoś');


    const players = appComponent.state().players;

    expect(players.length).toEqual(1);
});