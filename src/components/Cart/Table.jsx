import React from 'react'

export default function Table({data,sum, deleteNote}) {

  
  return (
    <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Название</th>
                    <th scope="col">Размер</th>
                    <th scope="col">Кол-во</th>
                    <th scope="col">Стоимость</th>
                    <th scope="col">Итого</th>
                    <th scope="col">Действия</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((el, index) => {
                    return (
                      < tr key={el.id} >
                        <td scope="row">{index + 1}</td>
                        <td><a href="/products/1.html">{el.title}</a></td>
                        <td>{el.size}</td>
                        <td>{el.count}</td>
                        <td>{Number(el.price).toLocaleString("ru-RU")} руб.</td>
                        <td>{(el.price * el.count).toLocaleString("ru-RU")} руб.</td>
                        <td><button className="btn btn-outline-danger btn-sm" onClick={() => deleteNote(el.id, el.count)}>Удалить</button></td>
                      </tr>
                    )
                  })}
                  <tr>
                    <td colSpan={5} className="text-right">Общая стоимость</td>
                    <td>{sum.toLocaleString("ru-RU")} руб.</td>
                  </tr>
                </tbody>
              </table>
  )
}
