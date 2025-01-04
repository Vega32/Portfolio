import './Container.css'


export default function Container(proms) {
    return (
        <div className='container'>
            <a href={proms.link}>
            <h1 className='card_h1'>{proms.title}</h1>
            </a>
            <div className='card_info'>
                <div className='card_img_div'>
                <img className='card_img' src={proms.image} />
                </div>
                <table className='card_table'>
                <tbody>
                    <tr>
                        <th style={{verticalAlign:"top"}}>
                            <h2 className='card_h2'>Description</h2>
                            <p className='card_p'>{proms.description}</p>
                            <h2 className='card_h2'>Skills</h2>
                            <p className='card_p'>{proms.skill}</p>
                        </th>
                    </tr>
                </tbody>
            </table>
            </div>

            
        </div>
    )
}
