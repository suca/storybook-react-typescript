import React from "react";

import { storiesOf } from "@storybook/react";
import { wInfo } from "./utils";

storiesOf("Welcome", module).addWithJSX(
  "to your new Storybook🎊",
  wInfo(`

    ### Notes
    Basic Components Explorer

  `)(() => <div>
        <h1>Hello Typescript devs</h1>
        <div>
            <h5>
                Just follow this link for more information about Storybook https://storybook.js.org
            </h5>
            <button type="button" style={{background: '#3c8ee9', padding: '10px', border: 'none'}}>
                <a style={{color: '#fff', fontSize: '16px', textDecoration: 'none'}} target="_blank" href="https://docs.google.com/presentation/d/1ct8H395ktVdojscgHsGgyjNa5OHNn5H_kkiv9AUDwWk/edit?usp=sharing">
                    Go to the Slides
                </a>
            </button>
        </div>
  </div>)
);
