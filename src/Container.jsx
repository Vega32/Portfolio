import './Container.css'


export default function Container(proms) {
    return (
        <div className='container'>
            <a href={proms.link}>
            <h1>{proms.title}</h1>
            </a>

            <table>
                <tbody>
                    <tr>
                        <th style={{width:"40%"}}>
                            <img src={proms.image} />
                        </th>
                        <th style={{verticalAlign:"top"}}>
                            <h2>Description</h2>
                            <p>{proms.description}</p>
                            <h2>Skills</h2>
                            <p>{proms.skill}</p>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
