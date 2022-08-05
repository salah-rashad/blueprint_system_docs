import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export const ProjectName = () => {
  const { siteConfig } = useDocusaurusContext();
  return siteConfig.title;
};

export const Feature = ({ children }) => (
  <div>
    <span
      style={{
        float: "left",
        marginLeft: 8 + "px",
      }}
    >
      ⚡
    </span>
    <div
      style={{
        listStyleType: "none",
        marginLeft: 36 + "px",
        marginBottom: 16 + "px",
      }}
    >
      {children}
    </div>
  </div>
);

export const getVersionCode = () => {
  var loc = window.location.pathname;
  var dir = loc.substring(0, loc.lastIndexOf("/"));
  return dir;
};

export const Image = ({ children, style }) => (
  <img src={children} style={style} />
);

/** @type {(url:string) => string} */
export function readFile(url) {
  // read text from URL location
  var request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.send(null);
  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      var type = request.getResponseHeader("Content-Type");
      return request.responseText;
    }
  };

  // var result = await fetch(url)
  //   .then((r) => r.text())
  //   .then((t) => t);

  // return result;
}

export const Badge = ({ children }) => (
  <span
    style={{
      backgroundColor: "var(--ifm-color-secondary)",
      borderRadius: "50px",
      color: "var(--ifm-color-black)",
      paddingLeft: "8px",
      paddingRight: "8px",
      paddingTop: "2px",
      paddingBottom: "2px",
      fontSize: "14px",
    }}
  >
    {children}
  </span>
);
