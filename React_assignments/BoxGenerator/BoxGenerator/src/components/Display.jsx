import React from 'react'
import styles from './Display.module.css'

const Display = (props) => {
    return (
        <div className={styles.box}>
            {props.boxes.map((b, index) =>
            <div key={index} className={`${styles.boxItem} ${styles.backgroundColor}`} 
            style={{...b,'--box-size': `${b.newBoxSize}px`}}>
                {b.color}
                </div>
            )}

        </div>
    )
}

export default Display