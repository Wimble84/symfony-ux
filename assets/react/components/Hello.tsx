import * as React from "react";

const Hello = ({fullName}: props) => (
    <p>Hello, dear {fullName} !</p>
);

interface props {
    fullName: string,
}

export default Hello;
