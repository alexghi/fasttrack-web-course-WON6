const BoxItem = ( props ) => {
    return <div style={{
        height: '200px',
        width: '200px',

        borderRadius: '10px',

    }}>
        <div>
            {props.children}
        </div>
    </div>
}

export default BoxItem;