/**
 *
 * LeftMenuFooter
 *
 */

import React from "react";

import Wrapper, { A } from "./Wrapper";

function LeftMenuFooter() {
  // PROJECT_TYPE is an env variable defined in the webpack config
  // eslint-disable-next-line no-undef
  const projectType = PROJECT_TYPE;

  return (
    <Wrapper>
      <div className="poweredBy">
        <A key="website" href="/" target="_blank" rel="noopener noreferrer">
          Shopygo 2021
        </A>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;
