import React, { useState } from 'react'

function StateSample4() {

    const [isShow, setisShow] = useState(true);

    return (<>
        <button onClick={() => setisShow(!isShow)}>Hide / Show</button>

        {
            isShow ? <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore recusandae aliquam vero, temporibus doloribus velit vel praesentium itaque id accusantium porro, placeat accusamus. Enim sapiente molestiae quam, et quia consequuntur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis blanditiis suscipit nemo fugiat ratione eius nisi? At est repudiandae id magni officia esse. Placeat vel deleniti doloremque accusamus libero maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae perferendis fuga laboriosam veniam ipsa! Cupiditate quisquam ab, beatae animi impedit, modi dolor vel perspiciatis, perferendis atque totam dolorum illum dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, sit. Placeat, officia? Deserunt aliquam dolore repellendus, esse suscipit fugiat adipisci non ullam earum molestiae facilis, alias, cumque id neque aut.
            </p> : <></>
        }

    </>
    )
}

export default StateSample4