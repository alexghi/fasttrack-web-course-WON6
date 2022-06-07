const Sidebar = ( props ) => {
    const { children } = props 
    return <div style={{
        height: '100vh',
        width: '200px',
        border: '1px solid #eee',
        boxShadow: '1px 10px 2px #eee',
        backgroundColor: '#190B28',
        padding: '10px'
    }}>
        {children}
    </div>
}

export default Sidebar;