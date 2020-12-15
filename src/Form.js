import React from 'react';

function TeamMemForm(props) {
    const { values, update, submit } = props;

    const change = (event) => {
        const { name, value } = event.target;
        update(name, value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    };

    return (
        <form onSubmit = {onSubmit}>
            <div className='form-input'>
                <label>
                    Name  
                     <input name ='name'
                      type = 'text' 
                      placeholder = 'Name'
                      maxLength = '30' 
                      value = {values.name}
                      onChange = {change} />
                </label>

                <label>
                    Email  
                     <input name ='email'
                      type = 'text' 
                      placeholder = 'Email'
                      maxLength = '40' 
                      value = {values.email}
                      onChange = {change} />
                </label>

                <label>
                    Role 
                     <select name = 'role' value = {values.role} onChange = {change}>
                        <option value = ''>----Choose Option----</option>
                        <option value = 'Backend Engineer'>Backend Engineer</option>
                        <option value = 'Frontend Engineer'>Frontend Engineer</option>
                        <option value = 'Designer'>Designer</option>
                        <option value = 'Senior Web Developer'>Senior Web Developer</option>
                        <option value = 'Junior Web Developer'>Junior Web Developer</option>
                        <option value = 'Data Analyst'>Data Analyst</option>
                     </select>
                </label>

                <div>
                    <button>Submit</button>
                </div>
            </div>
        </form>
    )
}

export default TeamMemForm;