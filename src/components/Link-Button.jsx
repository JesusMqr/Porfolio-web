
/* eslint-disable react/prop-types */

export const LinkButton = ({ label, link, icon }) => {
    return (
        <a href={link}>
            {icon}
            {label}
        </a>
    );
};