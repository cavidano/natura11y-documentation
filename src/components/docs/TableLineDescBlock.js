import React, { cloneElement } from 'react';

const TableLineDescBlock = ({ children, ...props }) => {

    const tableRows = children.map((child) => {
        return cloneElement(child, {...props})
    });

    return (
        <figure className="container narrow margin-y-4">
            <table className="table table--edge">
                <thead>
                    <tr>
                        <th className="width-30" scope="col">Line #</th>
                        <th className="width-70" scope="col">Details</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
        </figure>
    );
}

export default TableLineDescBlock;