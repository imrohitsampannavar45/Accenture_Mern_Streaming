import React from 'react';

const Company = ({ companyName }) => {

    const desc = {
        Accenture: "Accenture is an Irish-domicilied Multinational professional services company. A Fortune Global 500 Company. it has been incorporated in Dublin, Ireland since 1 Septemeber 2009",
        IBM: "IBM is an Irish-domicilied Multinational professional services company. A Fortune Global 500 Company. it has been incorporated in Dublin, Ireland since 1 Septemeber 2009s.",
        Google: "Google is an Irish-domicilied Multinational professional services company. A Fortune Global 500 Company. it has been incorporated in Dublin, Ireland since 1 Septemeber 2009.",
    };

    return (
        <div>
            {desc[companyName] ? (
                <div>
                    <h2>{companyName}</h2>
                    <p>{desc[companyName]}</p>
                </div>
            ) : (
                <p>Data not available</p>
            )}
        </div>
    );
};

export default Company;
