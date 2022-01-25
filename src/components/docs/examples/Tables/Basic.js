import React from 'react';

const Basic = (props) => {

    const { tableClasses } = props;
    
    return (
        <table className={`table ${tableClasses && tableClasses}`}>

            <caption className="screen-reader-only">
                Places with columnar jointed volcanics
            </caption>

            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Country</th>
                    <th className="text-align-right" scope="col">
                        Map View
                    </th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>Giant's Causeway</td>
                    <td>Northern Ireland</td>
                    <td className="text-align-right">
                        <a href="#1">Map View</a>
                    </td>
                </tr>
                <tr>
                    <td>Fingal's Cave</td>
                    <td>Scotland</td>
                    <td className="text-align-right">
                        <a href="#1">Map View</a>
                    </td>
                </tr>
                <tr>
                    <td>Garni Gorge</td>
                    <td>Armenia</td>
                    <td className="text-align-right">
                        <a href="#1">Map View</a>
                    </td>
                </tr>
                <tr>
                    <td>Cape Raoul</td>
                    <td>Tasmania</td>
                    <td className="text-align-right">
                        <a href="#1">Map View</a>
                    </td>
                </tr>
                <tr>
                    <td>Svartifoss</td>
                    <td>Iceland</td>
                    <td className="text-align-right">
                        <a href="#1">Map View</a>
                    </td>
                </tr>
            </tbody>

        </table>
    );
}

Basic.defaultProps = {
    tableClasses: ''
}

export default Basic;