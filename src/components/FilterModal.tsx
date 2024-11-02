import { useForm } from 'react-hook-form';
import './datatable.scss';


type FilterModalForm = {
    organization: string; 
    username: string; 
    email: string;
    date: string; 
    phoneNumber: string; 
    status: 'Active' | 'Inactive' | 'Pending' | 'Blacklisted';
}

const FilterModal: React.FC = () => {

    const { register, handleSubmit, formState: {errors} } = useForm<FilterModalForm>();



    return (
        <div className="modal-overlay">
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <form>
                    <div className="form-page">
                        <label>
                            organization<br/>
                            <select
                                className='select-class'
                                {...register("organization")}
                            >
                                <option value=""> Select </option>
                            </select>
                        </label>

                        <label>
                            username<br/>
                            <input 
                                placeholder="User"
                                {...register("username")}
                            ></input>
                        </label>

                        <label>
                            Email<br/>
                            <input 
                                type='email'
                                placeholder="Email"
                                {...register("email")}
                            ></input>
                        </label>

                        <label>
                            Date<br/>
                            <input 
                                type='date'
                                placeholder="Date"
                                {...register("date")}
                            ></input>
                        </label>

                        <label>
                            Phone Number<br/>
                            <input 
                                placeholder="Phone Number"
                                {...register("phoneNumber")}
                            ></input>
                        </label>

                        <label>
                            status<br/>
                            <input 
                                placeholder="Status"
                                {...register("status")}
                            ></input>
                        </label>

                        <span style={{display:'flex',justifyContent:'space-between'}}>
                            <button type='submit' className='reset-button'> Reset </button>
                            <button type="submit" className='filter-button'> Filter </button>
                        </span>
                    </div>
                    
                </form>
                
            </div>
        </div>
    );
};

export default FilterModal;
