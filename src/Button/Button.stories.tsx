import * as React from "react";

import { storiesOf } from "@storybook/react";
import { Button } from "./Button";
import { wInfo } from "../utils";
import { text, boolean } from "@storybook/addon-knobs/react";

(storiesOf("Components/Button", module) as any)
    .addWithJSX("basic Button",
        wInfo(`
          ### Notes
        
          The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality. By default, HTML buttons are typically presented in a style similar to that of the host platform the user agent is running on, but you can change the appearance of the button using CSS.
        
          ### Usage
          ~~~js
          <Button
            label={'Click Me!'}
            disabled={false}
            onClick={() => alert('Hello World!')}
          />
          ~~~`)(() => (
            <Button
              label={text("label", "Click Me!")}
              disabled={boolean("disabled", false)}
              onClick={() => alert("Hello World!")}
            />
  ))
);
