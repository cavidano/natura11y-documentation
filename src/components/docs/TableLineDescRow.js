import React from 'react';

import { Link } from 'gatsby';

const TableLineDescRow = ({ children, lines, ...props }) => {

    return (
        <tr key={`${props.targetFigure}_${lines}`}>
            <td>
                <Link to={`./#figure_${props.targetFigure}.${lines}`} data-line-anchor>
                    {lines}
                </Link>
            </td>
            <td>
                {children}
            </td>
        </tr>
    );
}

export default TableLineDescRow;