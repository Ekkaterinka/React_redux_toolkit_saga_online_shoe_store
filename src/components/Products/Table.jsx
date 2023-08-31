import React from 'react'

export default function Table({items}) {
    return (
        <table className="table table-bordered">
            <tbody>
                <tr>
                    <td>Артикул</td>
                    <td>{items.sku}</td>
                </tr>
                <tr>
                    <td>Производитель</td>
                    <td>{items.manufacturer}</td>
                </tr>
                <tr>
                    <td>Цвет</td>
                    <td>{items.color}</td>
                </tr>
                <tr>
                    <td>Материалы</td>
                    <td>{items.material}</td>
                </tr>
                <tr>
                    <td>Сезон</td>
                    <td>{items.season}</td>
                </tr>
                <tr>
                    <td>Повод</td>
                    <td>{items.reason}</td>
                </tr>
            </tbody>
        </table>
    )
}
