import React from "react";

export const UpperMenuSection = ({name, children}: {name: string, children: JSX.Element}) => (
  <>
    <input type="checkbox" id={name} />
    <section>
      {children}
      <h5 className="ui inverted center aligned bottom attached header">
        <label htmlFor={name}>{name}</label>
      </h5>
    </section>
  </>
);
