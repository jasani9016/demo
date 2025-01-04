import React from 'react'

function Alert(props) {
    const capitalize = (word) => {
        const lower = word?.toLowerCase();
        return lower?.charAt(0)?.toUpperCase(0) + lower?.slice(1);
    }
    return (
        <div>
            {
                props.alert && (
                    <div className={`alert alert-${props?.alert?.type} alert-dismissible fade show`} role="alert">
                        {/* {props.alert} */}
                        <strong>{capitalize(props?.alert?.type)}</strong>: {props?.alert?.message}
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                )
            }

        </div>
    )
}

export default Alert