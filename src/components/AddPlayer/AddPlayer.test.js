import AddPlayer from "./AddPlayer";
import React from "react";
import { shallow, mount } from "enzyme";

it("renders without crashing", () => {
    shallow(<AddPlayer />);
});

it("call onPlayerAdd with proper value", () => {
    const onPlayerAdd = jest.fn(),
        addPlayerComponent = mount(<AddPlayer onPlayerAdd={onPlayerAdd} />),
        nameInput = addPlayerComponent
        .find("input")
        .first()
        .getDOMNode(),
        form = addPlayerComponent.find("form");

    nameInput.value = "Ania";
    form.simulate("submit");
    expect(onPlayerAdd).toBeCalledWith("Ania");
});