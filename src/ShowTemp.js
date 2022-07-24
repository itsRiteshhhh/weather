import React from 'react'

function ShowTemp({ text }) {
    let temp = (text.temp -273).toFixed(2);
    let temp_minn = (text.temp_min -273).toFixed(2);
    let temp_maxx = (text.temp_max -273).toFixed(2);

    return (
        <div class="container my-5 herodiv">
            <div class="roww">

                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title"><b>Description</b></h5>
                        <p class="card-text">{text.description}</p>
                    </div>
                </div>

 
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title"><b>Temp</b> </h5>
                        <p class="card-text">{temp == -273.00 ? 0 : temp}°C</p>
                    </div>
                </div>


                <div class="card">
                    <div class="card-body ">
                        <h5 class="card-title"><b>Temp Min</b></h5>
                        <p class="card-text">{temp_minn == -273.00 ? 0 : temp_minn}°C</p>
                    </div>
                </div>

            </div>
            <div class="roww">

                <div class="card">

                    <div class="card-body">
                        <h5 class="card-title"><b>Temp Max</b></h5>
                        <p class="card-text">{temp_maxx == -273.00 ? 0 : temp_maxx}°C</p>
                    </div>
                </div>


                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title"><b>Humidity</b></h5>
                        <p class="card-text">{text.humidity}%</p>
                    </div>
                </div>


                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title"><b>Sunrise</b></h5>
                        <p class="card-text">{text.sunrise}</p>
                    </div>
                </div>
            </div>

            <div class="roww" >

                <div class="card ">
                    <div class="card-body p-2">
                        <h5 class="card-title"><b>Sunset</b></h5>
                        <p class="card-text">{text.sunset}</p>
                    </div>
                </div>


                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title"><b>Country</b></h5>
                        <p class="card-text">{text.country}</p>
                    </div>
                </div>

            </div >
            <div>
                <div class="homediv">
                    <p class="text"> Have a GOOD DAY!!!</p>


                </div>
            </div>
        </div >


    )
}

export default ShowTemp;
