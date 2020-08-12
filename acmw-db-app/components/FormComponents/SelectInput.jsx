import styles from '../../styles/components/FormComponents.module.css'

const SelectInput = (props) => {

    return (
        <select className={styles.field}>
            {props.options.map((value, index) => {
                return <option key={index}>{value}</option>
            })}
        </select>
    )
}

export default SelectInput