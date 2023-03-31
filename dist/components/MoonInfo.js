import React from "react";
const MoonInfo = (props) => {
    const moon = props.moon;
    return (React.createElement(React.Fragment, null, moon ?
        (React.createElement("div", { className: "oneMoon" },
            React.createElement("details", null,
                React.createElement("summary", null, moon.moon_name),
                React.createElement("ul", null,
                    React.createElement("li", null, moon.discovered),
                    React.createElement("li", null, moon.history),
                    React.createElement("li", null,
                        moon.moon_name,
                        " has a radius of ",
                        moon.moon_radius,
                        " km.")))))
        : 'Loading...'));
};
export default MoonInfo;
//# sourceMappingURL=MoonInfo.js.map