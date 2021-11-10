import React from 'react';

const TableLineDescRow = ({ children, lines, ...props }) => {
    return (
        <tr key={`${props.targetFigure}_${lines}`}>
            <td>
                <a href={`#figure_${props.targetFigure}.${lines}`} data-line-anchor>
                    {lines}
                </a>
            </td>
            <td>
                {children}
            </td>
        </tr>
    );
}

export default TableLineDescRow;