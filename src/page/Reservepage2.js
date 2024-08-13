import { useState } from 'react';

export default function ControlledComponent() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [resdate, setResDate] = useState("");
    const [restime, setResTime] = useState("");
    const [NumberGuests, setNumberGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Dear K.${name} your resservation has been made. We will contact you soon`)
    }

    const availableTimes = [
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00'
    ];

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1 className='m-3'>
                    Reservation system
                </h1>
                <div className='m-2'>
                    <label htmlFor="name">Name</label><br />
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label><br />
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='m-2'>
                    <label htmlFor="res-date">Choose date</label><br />
                    <input
                        type="date"
                        id="resdate"
                        value={resdate}
                        onChange={(e) => setResDate(e.target.value)}
                    />
                </div>
                <div className='m-2'>
                    <label htmlFor="restime">Choose time</label><br />
                    <select
                        id="restime"
                        value={restime}
                        onChange={(e) => setResTime(e.target.value)}
                    >
                        {availableTimes.map((time, index) => (
                            <option key={index} value={time}>{time}</option>
                        ))}
                    </select>
                </div>
                <div className='m-2'>
                    <label htmlFor="NumberGuests">Number of guests</label><br />
                    <input
                        type="number"
                        placeholder="1" min="1" max="10"
                        id="NumberGuests"
                        value={NumberGuests}
                        onChange={(e) => setNumberGuests(e.target.value)}
                    />
                </div>
                <div className='m-2'>
                    <label for="occasion">Occasion</label><br />
                    <select
                        id="occasion"
                        value={occasion}
                        onChange={(e) => setOccasion(e.target.value)}
                    >
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>None</option>
                    </select>
                </div>
                <div className='m-3'>
                    <input type="submit" value="Make Your reservation"></input>
                </div>
            </form>
        </div>
    )
};