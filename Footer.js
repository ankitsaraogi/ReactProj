import React from 'react';

const Footer = ({ data }) => {
    return (
        <div className="footer-title">
            {"Total time Spent: " + data + " Hrs"}
        </div>
    )
}

export default Footer;