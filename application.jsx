import * as React from "react";

export function ListMovies() {
    return <div><ul><h1>List Movies</h1></ul></div>;
}

export function NewMovieForm() {
    return <form>
        <h1>Add new movie</h1>
        <div>
            Title: <input/>
        </div>
        <div>
            Year: <input/>
        </div>
        <div>
            Plot: <textarea></textarea>
        </div>
    </form>;
}