import React from 'react';

function TeamMemForm(props) {
    const { values, update, submit } = props;

    return (
        <form>
            <div className='form-inputs'>
                <label>
                    Name  
                     <input name ='name'
                      type = 'text' 
                      placeholder = 'Name'
                      maxLength = '30' 
                      value = {values.name} />
                </label>

                <label>
                    Email  
                     <input name ='email'
                      type = 'text' 
                      placeholder = 'Email'
                      maxLength = '40' 
                      value = {values.email} />
                </label>

                <label>
                    Role 
                     <select name = 'role' value = {values.role}>
                        <option value = ''>----Choose Option----</option>
                        <option value = 'backend'>Backend Engineer</option>
                        <option value = 'frontend'>Frontend Engineer</option>
                        <option value = 'designer'>Designer</option>
                        <option value = 'seniorWD'>Senior Web Developer</option>
                        <option value = 'juniorWD'>Junior Web Developer</option>
                        <option value = 'data-analyst'>Data Analyst</option>
                     </select>
                </label>
                
                <div>
                    <button className = 'submit'>Submit</button>
                </div>
            </div>
        </form>
    )
}

export default TeamMemForm;