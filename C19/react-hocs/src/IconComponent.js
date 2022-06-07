const IconComponent = ( {emoji} ) => {
    return <div style={{
        border: '1px solid white',
        height: '20px',
        width: '20px',
        backgroundColor: '#fafafa',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        {emoji}
    </div>
}

export default IconComponent;