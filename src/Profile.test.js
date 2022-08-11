import React from 'react';
import {render, screen} from "@testing-library/react";
import Profile from "./Profile";

describe('<Profile />', () => {
    it('matches snapshot', () => {
        const utils = render(<Profile username="okdohyuk" name="유도혁" />);
        expect(utils.container).toMatchSnapshot();
    });
    it('shows the props correctly', () => {
        render(<Profile username="okdohyuk" name="유도혁" />);
        screen.getByText('okdohyuk'); // okdohyuk 라는 텍스트를 가진 엘리먼트가 있는지 확인
        screen.getByText('(유도혁)'); // (유도혁) 이라는 텍스트를 가진 엘리먼트가 있는지 확인
        screen.getByText(/유/); // 정규식 /유/ 을 통과하는 엘리먼트가 있는지 확인
    });
});
