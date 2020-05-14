import React from "react";
import PropTypes from "prop-types";
import {
  Div,
  TitleWrap,
  Title,
  SubTitle,
  ToggleThemeWrap,
  Label,
  ThemeSwitch,
} from "./Header.styled";

function Header({ followStat, toggleState, toggleFunc }) {
  return (
    <Div>
      <TitleWrap>
        <Title>Social Media Dashboard</Title>
        <SubTitle>Total Followers: {followStat}</SubTitle>
      </TitleWrap>
      <ToggleThemeWrap>
        <Label>Dark Mode</Label>
        <label id="pseudo-switch" style={{ position: "relative" }}>
          <ThemeSwitch
            type="checkbox"
            checked={toggleState === "dark"}
            onChange={toggleFunc}
          />
          <span />
        </label>
      </ToggleThemeWrap>
    </Div>
  );
}

Header.propTypes = {
  followStat: PropTypes.string.isRequired,
  toggleState: PropTypes.string.isRequired,
  toggleFunc: PropTypes.func.isRequired,
};

export default Header;
