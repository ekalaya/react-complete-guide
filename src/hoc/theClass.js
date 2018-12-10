import React, { Component } from 'react';

// const theClass = (WrappedComponent, className) => {
//     return (props) => (
//         <div className={className}>
//             <WrappedComponent {...props} />
//         </div>

//     )
// }

const theClass = (WrappedComponent, className) => {
        const Theclass = class extends Component {
            render (){
                return (
                <div className={className}>
                    <WrappedComponent ref={this.props.forwardRef} {...this.props} />
                </div>
                )
            }
        }
        
        return React.forwardRef((props, ref) => {
            return <Theclass {...props} forwardRef = {ref} />
        })
}

export default theClass;