import React from "react";
const MoonInfo = (props) => {
    const moon = props.moon;
    return (React.createElement(React.Fragment, null, moon ?
        (React.createElement("ul", null,
            React.createElement("li", null, moon.moon_name)))
        : 'Loading...'));
};
export default MoonInfo;
//# sourceMappingURL=MoonInfo.js.map