const app = (require('express'))();

app.use(require('express').json());

const songs = [
    {
        "song": "lovesong",
        "artist": "the cure",
        "id": 1
    },
    {
        "song": "smells like teen spirit",
        "artist": "nirvana",
        "id": 2
    },
    {
        "song": "disco stick",
        "artist": "lady gaga",
        "id": 3
    }
]

app.get('/api/songs', (req, res) => res.status(200).json(songs))
//req.params.id = 2
//req.body = {song: "" }
app.put('/api/songs/:id', (req, res) => {
    let { id } = req.params;
    let index = songs.findIndex((val) => val.id === +req.params.id)
    songs[index].song = req.body.song;
    songs[index].artist = req.body.artist
    res.status(200).json(songs);
})

app.listen(5050, () => console.log('Listening on Port 5050'));