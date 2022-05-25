import React from 'react';
import classnames from 'classnames';
function Menu({ handleChangeTab, currentTab }) {
    const menuItems = [
        {
            value: "today",
            text: "Today"
        },
        {
            value: "week",
            text: "Week"
        },
        {
            value: "hour",
            text: "Hour"
        },
    ]
    const handleClickTab = (data) => {
        if (handleChangeTab) {
            handleChangeTab(data)
        }
    }
    return (
        <div className="main-menu">
            <ul>
                {
                    menuItems.length > 0 && (
                        menuItems.map(data => (
                            <li
                                className={classnames({
                                    active: currentTab === data.value
                                })}
                                key={data.value}
                                onClick={() => handleClickTab(data.value)}
                            >{data.text}</li>
                        ))
                    )
                }
            </ul>
        </div>
    );
}

export default Menu;