import React from 'react';

const Footer = props => {
    const { direcciones } = props;
    return (
        <div className="footer">
            <p>
                Un footer viejo noma
            </p>
            {direcciones}
        </div>
    );
};

Footer.defaultProps = {
    direcciones: 'link a alguna pagina'
};

export default Footer;