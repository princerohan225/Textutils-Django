import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, settext] = useState('');
    // const [time,setTime]=useState('')

    const handleUpCase = () => {
        let new_text = text.toUpperCase();
        // console.log(new_text)
        settext(new_text)
        if (props.mode !== 'dark') {
            props.showAlert('Converted to UpperCase', 'success')

        }
        else {
            props.showAlert('Converted to UpperCase', 'dark')
        }
    }

    const handlelowercase = () => {
        let low_text = text.toLowerCase();
        // console.log(low_text)
        settext(low_text)
        if (props.mode !== 'dark') {
            props.showAlert('Converted to LowerCase', 'success')

        }
        else {
            props.showAlert('Converted to LowerCase', 'dark')
        }
    }

    const handleLength = () => {
        let text_length = text.length;
        // console.log(text_length);
        settext('Number of Characters: ' + text_length)
        if (props.mode !== 'dark') {
            props.showAlert(`Total Character ${text_length}`, 'success')

        }
        else {
            props.showAlert(`Total Character ${text_length}`, 'dark')
        }
    }

    const handleCopyText = () => {
        let copy_text = document.getElementById('mybtn');
        copy_text.select();
        copy_text.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copy_text.value);
        if (props.mode !== 'dark') {
            props.showAlert('Copy to Clipboard', 'success')

        }
        else {
            props.showAlert('Copy to Clipboard', 'dark')
        }
    }

    const handleClear = () => {
        let clear_text = '';
        settext(clear_text);
        if (props.mode !== 'dark') {
            props.showAlert('Text is Clear', 'success')

        }
        else {
            props.showAlert('Text is Clear', 'dark')
        }
    }

    const handleonChange = (event) => {
        // console.log('On Change')
        settext(event.target.value)
    }

    // const watch = () => {
       

    //     let a;
    //     let date;
    //     let time;
    //     const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    //     a = new Date();
    //     date = a.toLocaleDateString(undefined, options);
    //     time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds()
    //     // console.log(time)
    //     document.getElementById('Time').innerHTML = time + " on\t" + date

    // }
    // setInterval(watch, 1000);
    // // clearInterval(x)




    return (

        <>

            <div className='container my-3' style={{ color: props.mode !== 'dark' ? 'black' : 'white' }}>

                {/* <p> The Current Time is: <strong><span id='Time'></span></strong></p> */}
                

                <p>{props.Heading}</p>

                <div className="mb-3">

                    <textarea className="form-control my-2" onChange={handleonChange} id="mybtn" rows="5" value={text} placeholder='Enter your Text Here.'></textarea>

                    <button className={`${props.mode !== 'dark' ? 'btn btn-primary' : 'btn btn-dark'} mx-1 my-1`} onClick={handleUpCase}>Upper Case</button>

                    <button className={`${props.mode !== 'dark' ? 'btn btn-primary' : 'btn btn-dark'}`} onClick={handlelowercase}>Lower Case</button>

                    <button className={`${props.mode !== 'dark' ? 'btn btn-primary' : 'btn btn-dark'} mx-1`} onClick={handleLength}>Character Length</button>

                    <button className={`${props.mode !== 'dark' ? 'btn btn-primary' : 'btn btn-dark'}`} onClick={handleCopyText}>Copy Text</button>

                    <button className={`${props.mode !== 'dark' ? 'btn btn-primary' : 'btn btn-dark'} mx-1`} onClick={handleClear}>Clear Text</button>
                </div>
            </div>

            <div className='container' style={{ color: props.mode !== 'dark' ? 'black' : 'white' }}>
                <h2>Text Summary...</h2>
                <p>{text.split(' ').length} words and {text.length} character.</p>

                <p>{0.008 * text.split(' ').length}Minutes Read.</p>

                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter Something Text to above to Preview.'}</p>

            </div>
            <hr style={{ color: props.mode !== 'dark' ? 'black' : 'white' }}></hr>


        </>
    );
}