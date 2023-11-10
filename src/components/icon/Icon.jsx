import { Box } from "@mui/system";
import React from "react";

const Icon = () => {
  return (
    <div style={{ margin: "0", padding: "0" }}>
      <Box style={backgrounds}>
        <ul>
          <li style={{ marginBottom: "40px" }}></li>
          <li
            style={{
              fontSize: "18px",
              color: "red",
              textAlign: "center",
              marginBottom: "1%",
            }}
          >
            new
          </li>
          <li style={textPhone}>iPhone 15PRO</li>
          <img
            style={iconCheckListStylesLogo}
            src="https://manuals.plus/wp-content/uploads/2022/02/Titanium_Logo.png"
            alt=""
          />
          <li style={iconTextListStyle}>From $999 or $41.62/mo. for 24 mo.</li>
        </ul>
        <ul>
          <li style={iconCheckListStyle}>
            <img
              style={iconCheckListStyle}
              src="https://i.pinimg.com/564x/97/71/6f/97716f02b9480cd65cbf05cc772c22c6.jpg"
              alt=""
            />
          </li>
        </ul>
      </Box>
      <Box style={newBackgrounds}>
        <ul>
          <li style={{ marginBottom: "40px" }}></li>
          <li
            style={{
              fontSize: "18px",
              color: "red",
              textAlign: "center",
              marginBottom: "1%",
            }}
          >
            new
          </li>
          <li
            style={{
              fontSize: "34px",
              textAlign: "center",
              color: "black",
              fontHeight: "600",
              letterSpacing: "-0.003em",
              fontFamily:
                "SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif",
            }}
          >
            iPhone 15
          </li>
          <li
            style={{
              color: "black",
              fontSize: "72px",
              textAlign: "center",
              fontFamily:
                "SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif",
              fontWeight: "bold",
            }}
          >
            New color
          </li>
          <li style={iconTextListStyles}>From $799 or $33.29/mo. for 24 mo.</li>
        </ul>
        <ul>
          <li style={iconCheckListStyles}>
            <img
              style={iconCheckListStyles}
              src="https://geekville.ru/wp-content/uploads/2023/09/screenshot-2023-09-12-at-10-38-30-am.webp"
              alt=""
            />
          </li>
        </ul>
      </Box>
    </div>
  );
};

const backgrounds = {
  backgroundColor: "black",
  padding: 0,
  margin: 0,
};

const textPhone = {
  fontSize: "34px",
  textAlign: "center",
  color: "white",
  fontHeight: "600",
  letterSpacing: "-0.003em",
  fontFamily:
    "SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif",
};

const iconTextListStyle = {
  listStyle: "none",
  textAlign: "center",
  color: "white",
  marginBottom: "5%",
};

const iconCheckListStyle = {
  listStyle: "none",
  width: "65%",
  marginLeft: "17%",
};
const iconCheckListStylesLogo = {
  listStyle: "none",
  width: "40%",
  marginLeft: "30%",
};

const iconCheckListStyles = {
  listStyle: "none",
  width: "80%",
  marginLeft: "10%",
};

const newBackgrounds = {
  backgroundColor: "fff",
  padding: 0,
  margin: 0,
};

const iconTextListStyles = {
  listStyle: "none",
  textAlign: "center",
  color: "black",
  marginBottom: "2%",
};

export default Icon;
