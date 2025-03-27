import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FeedbackForm() {
    const [form, setForm] = useState({
        name: "",
        movie: "",
        rating: "",
        comment: "",
    });

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload

        const existingReviews = JSON.parse(localStorage.getItem("reviews")) || [];
        const updatedReviews = [...existingReviews, form];

        localStorage.setItem("reviews", JSON.stringify(updatedReviews));
        alert("Thank you for your feedback!");
        navigate("/reviews");
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <label>Name:</label>
            <input type="text" name="name" onChange={handleChange} value={form.name} required />

            <label>Movie:</label>
            <select name="movie" onChange={handleChange} value={form.movie} required>
                <option value="">Select</option>
                <option value="The Lion ">The Lion </option>
                <option value="Avatar">Avatar</option>
                <option value="Transformers">Transformers</option>
            </select>

            <label>Rating (1-5):</label>
            <input 
                type="number"
                name="rating"
                onChange={handleChange}
                min="1"
                max="5"
                value={form.rating}
                required
            />

            <label>Comments:</label>
            <input type="text" name="comment" onChange={handleChange} value={form.comment} required />

            <button type="submit">Submit</button>
        </form>
    );
}

export default FeedbackForm;
