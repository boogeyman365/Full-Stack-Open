const Total = ({ parts }) => {
    
    const total = parts.reduce((s, p) => s + p.exercises, 0)
    
    return (
        <h3><b>Total of exercises: {total}</b></h3>
    )
}

export default Total