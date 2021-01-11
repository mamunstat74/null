import React from 'react'

export default function table(props) {
 
    return (
        <div>
            <table className="table table-bordered mt-2">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Firast Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>{fname1}</td>
                <td>{lname1}</td>
                <td>{email1}</td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}
