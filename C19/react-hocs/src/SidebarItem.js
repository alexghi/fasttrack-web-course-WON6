const SidebarItem = ( { text, icon } ) => {
        return <div style={{
        color: '#fafafa',
        padding:'5px',
        cursor: 'pointer',
        display: 'flex'
    }}>
    
        {icon ? icon : null}
        <div style={{
            paddingLeft: '10px'
        }}>{text}</div>
    </div>
}


export default SidebarItem;